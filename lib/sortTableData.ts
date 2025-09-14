export const sortTableData = (data: any[], sortBy: number, order: "asc" | "desc") => {
    return [...data].sort((a, b) => {
        const valueA = a[sortBy];
        const valueB = b[sortBy];

        if (valueA === null || valueA === undefined) return 1;
        if (valueB === null || valueB === undefined) return -1;

        let comparison = 0

        //string comparison (case sensitive)
        if (typeof valueA === "string" && typeof valueB === "string") {
            comparison = valueA.localeCompare(valueB, undefined, { sensitivity: "base" });
        }
        // number comparison
        else if (typeof valueA === "number" && typeof valueB === "number") {
            comparison = valueA - valueB;
        }
        // date comparison
        else if (valueA instanceof Date && valueB instanceof Date) {
            comparison = valueA.getTime() - valueB.getTime();
        }
        // generic comparison
        else {
            if (valueA < valueB) {
                comparison = -1;
            } else if (valueA > valueB) {
                comparison = 1;
            }
        }

        return order === "asc" ? comparison : -comparison;
    });
}