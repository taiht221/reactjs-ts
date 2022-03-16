import { Box, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import productApi from '../../../api/productApi'
import { ListReponse, PaginationParams, Query } from '../../../models/common'
import { ProductList } from '../components/ProductList'
import { ProductLoadingPage } from '../components/ProductLoadingPage'
import Pagination from '@mui/material/Pagination'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import ProductSort from '../components/ProductSort'
import queryString from 'query-string'
import ProductFilters from '../components/ProductFilters'
import Breadcrumbs from '../../../layout/Breadcrumbs'
export default function ListPage() {
  const [productList, setProductList] = useState<Array<any>>([])
  const [loading, setLoading] = useState<Boolean>(true)
  const [pagination, setPagination] = useState<PaginationParams>()
  const [categoryName, setCategoryName] = useState<any>(undefined)
  const navigate = useNavigate()
  const location = useLocation()
  let { slug }: any = useParams()
  const queryParams = useMemo(() => {
    const params: any = queryString.parse(location.search)
    if (params.free_ship_badge === 'false') {
      delete params.free_ship_badge
    }
    const query: Query = {
      ...params,
      page: Number.parseInt(params?.page) || 1,
      sort: params.sort || 'real_price.-1',
      // free_ship_badge: params.free_ship_badge === 'true' || null,
      // is_best_price_guaranteed: params.is_best_price_guaranteed === 'true' || false,
      // support_p2h_delivery: params.support_p2h_delivery === 'true' || false,
    }

    // for (const property in query) {
    //   if (!query[property]) {
    //     delete query[property]
    //   }
    // }
    return query
  }, [location.search, slug])
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
    // setLoading(true)
    // setFilters((prevFilters) => ({
    //   ...prevFilters,
    //   page: page,
    // }))
    const filter = {
      ...queryParams,
      page: page,
    }
    navigate({
      pathname: location.pathname,
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
      sort: newSortValue,
    }
    navigate({
      search: queryString.stringify(filter),
    })
  }
  const handleFiltersChange = (newFilters: any) => {
    setLoading(true)
    // if (newFilters.is_best_price_guaranteed === false && queryParams.is_best_price_guaranteed === false) {
    //   delete newFilters.is_best_price_guaranteed;
    //   delete queryParams.is_best_price_guaranteed;
    // }
    const filter = {
      ...queryParams,
      ...newFilters,
    }
    for (const property in filter) {
      if (!filter[property]) {
        delete filter[property]
      }
    }

    navigate({
      search: queryString.stringify(filter),
    })
    // setFilter((prevFilters) => ({
    //   ...prevFilters,
    //   ...newFilters,
    // }));
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
                <ProductList data={productList}></ProductList>

                <Stack direction="row" justifyContent="space-between" pt={2} pb={2}>
                  <Typography>{`Showing 15 of ${pagination?.count} Products`}</Typography>
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
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
