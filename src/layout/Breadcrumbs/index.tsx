import { Breadcrumbs as BreadcrumbsMui, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export interface BreadcrumbsProps {
  links: any
}

export default function Breadcrumbs({ links }: BreadcrumbsProps) {
  let list = links.map((e: any, i: any) => {
    if (e?.link) {
      return (
        <Link to={e.link} key={i}>
          {e.title}
        </Link>
      )
    } else if (i < links.length - 1) {
      return <Typography key={i}>{e.title} /</Typography>
    } else {
      return (
        <Typography
          className="breadcrumbs_last"
          aria-current="page"
          key={i}
          sx={{ textTransform: 'capitalize' }}
        >
          {e.title}
        </Typography>
      )
    }
  })

  return (
    // <nav id="breadcrumbs" className="breadcrumbs">
    //   <div className="container page-wrapper">{list}</div>
    // </nav>
    <BreadcrumbsMui aria-label="breadcrumb">{list}</BreadcrumbsMui>
  )
}
