import CardPagination from 'components/CardPagination'

export default function Footer({
  pageCount,
  itemsQuantity,
  currentPage,
  onPageChange,
  rowsPerPage,
  onRowsPerPageChange,
}: {
  pageCount: number
  itemsQuantity: number
  currentPage: number
  onPageChange: (value: number) => any
  rowsPerPage: number
  onRowsPerPageChange: (...args: any) => any
}) {
  return (
    <CardPagination
      currentPage={currentPage}
      itemsQuantity={itemsQuantity}
      pageCount={pageCount}
      onPageChange={onPageChange}
      hasCard
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={onRowsPerPageChange}
    />
  )
}
