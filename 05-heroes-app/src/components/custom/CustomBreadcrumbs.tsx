
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "../ui/breadcrumb"
import { Link } from "react-router"

interface BreadCrumb {
  label: string;
  to: string
}

interface Props {
  currentPage: string;
  breadCrumbs?: BreadCrumb[];
}

export const CustomBreadcrumbs = ({ currentPage, breadCrumbs = [] }: Props) => {
  return (
    <Breadcrumb className="my-5">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to='/'>Inicio</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {
          breadCrumbs.map((crumb) => (
            <div className="flex items-center">
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={crumb.to}>{crumb.label}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </div>

          ))
        }

        <BreadcrumbSeparator />


        <BreadcrumbItem>
          <BreadcrumbLink className="text-black">{currentPage}</BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
