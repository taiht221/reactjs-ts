import { Box, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import Pagination from '@mui/material/Pagination'
import queryString from 'query-string'
import React, { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import productApi from '../../../api/productApi'
import Breadcrumbs from '../../../layout/Breadcrumbs'
import { PaginationParams, Query } from '../../../models/common'
import FilterViewer from '../components/FilterViewer'
import ProductFilters from '../components/ProductFilters'
import { ProductList } from '../components/ProductList'
import { ProductLoadingPage } from '../components/ProductLoadingPage'
import ProductSort from '../components/ProductSort'
export default function ListPage() {
  const [productList, setProductList] = useState<Array<any>>([])
  const [loading, setLoading] = useState<Boolean>(true)
  const [pagination, setPagination] = useState<PaginationParams>()
  const [categoryName, setCategoryName] = useState<any>('All Product')
  const navigate = useNavigate()
  const location = useLocation()

  const queryParams = useMemo(() => {
    const params: any = queryString.parse(location.search)

    const query: Query = {
      ...params,
      page: Number.parseInt(params?.page) || 1,
      sort: params.sort || 'real_price.-1',
    }

    return query
  }, [location.search])

  useEffect(() => {
    ;(async () => {
      try {
        const { data, paginate } = await productApi.getAll(queryParams)
        setProductList(data)
        setPagination(paginate)
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    })()
    return () => {}
  }, [queryParams])

  const handlePageChange = (e: any, page: any) => {
    setLoading(true)
    // setFilters((prevFilters) => ({
    //   ...prevFilters,
    //   page: page,
    // }))
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    const filter = {
      ...queryParams,
      page,
    }
    navigate({
      search: queryString.stringify(filter),
    })
    // scrollTop()
  }
  const handleSortChange = (newSortValue: string) => {
    setLoading(true)
    // setFilter((prevFilters) => ({
    //   ...prevFilters,
    //   sort: newSortValue || 'real_price.-1',
    // }));
    const filter = {
      ...queryParams,
      page: 1,
      sort: newSortValue,
    }
    navigate({
      search: queryString.stringify(filter),
    })
  }
  const handleFiltersChange = (newFilters: any) => {
    setLoading(true)

    const filter = {
      ...queryParams,
      ...newFilters,
      page: 1,
    }

    navigate({
      search: queryString.stringify(filter),
    })
  }
  const setNewFilters = (newFilters: any) => {
    navigate({
      search: queryString.stringify(newFilters),
    })
  }
  return (
    <Box sx={{ background: '#f6f9fc' }} pt={3}>
      <Container>
        <Breadcrumbs links={[{ title: 'Home', link: '/' }, { title: categoryName }]} />
        <ProductSort
          currentSort={queryParams.sort}
          onChange={handleSortChange}
          result={pagination?.count}
          categoryName={categoryName}
        />

        <Grid container spacing={2}>
          <Grid item md={3}>
            <Paper>
              <ProductFilters
                filters={queryParams}
                onChange={handleFiltersChange}
                setCategoryName={setCategoryName}
              />
            </Paper>
          </Grid>
          <Grid item md={9}>
            {loading ? (
              <ProductLoadingPage length={15} />
            ) : (
              <>
                {pagination?.count > 0 && pagination?.count !== undefined ? (
                  <>
                    <FilterViewer filters={queryParams} onChange={setNewFilters} />

                    <ProductList data={productList}></ProductList>

                    <Stack direction="row" justifyContent="space-between" pt={2} pb={2}>
                      <Typography>{`Showing ${productList.length} of ${pagination?.count} Products`}</Typography>
                      <Pagination
                        variant="outlined"
                        color="primary"
                        count={pagination?.totalPage || 1}
                        page={pagination?.currentPage || 1}
                        onChange={handlePageChange}
                        hideNextButton={pagination?.totalPage === pagination?.currentPage}
                        hidePrevButton={pagination?.currentPage === 1}
                      ></Pagination>
                    </Stack>
                  </>
                ) : (
                  <Typography>No result found</Typography>
                )}
              </>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
