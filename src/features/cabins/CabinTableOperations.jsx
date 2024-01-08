import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

const DISCOUNT_FILTER_OPTIONS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "No discount",
    value: "no-discount",
  },
  {
    label: "With discount",
    value: "with-discount",
  },
];

const SORT_OPTIONS = [
  {
    value: "name-asc",
    label: "Sorty by name (A-Z)",
  },
  {
    value: "name-desc",
    label: "Sorty by name (Z-A)",
  },
  {
    value: "regularPrice-asc",
    label: "Sorty by price (low first)",
  },
  {
    value: "regularPrice-desc",
    label: "Sorty by price (high first)",
  },
  {
    value: "maxCapacity-asc",
    label: "Sorty by capacity (low first)",
  },
  {
    value: "maxCapacity-desc",
    label: "Sorty by capacity (high first)",
  },
];

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter field="discount" options={DISCOUNT_FILTER_OPTIONS} />

      <SortBy options={SORT_OPTIONS} />
    </TableOperations>
  );
}

export default CabinTableOperations;
