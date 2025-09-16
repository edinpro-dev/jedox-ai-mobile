import { sortTableData } from "@/lib/sortTableData";
import {
    IconCheck,
    IconEdit,
    IconMinus,
    IconTriangleFilled,
    IconTriangleInvertedFilled,
} from "@tabler/icons-react-native";
import React, { useMemo, useState } from "react";
import { Pressable, ScrollView, View } from "react-native";
import { Text } from "../text";

export type Column = {
    id: number;
    label?: string;
    isActive?: boolean;
    data?: string[];
};

interface TableProps {
    title: string;
    columns: Column[];
    rows: (string | number)[][];
    sortable?: boolean;
    sortableColumns?: number[];
    checkbox?: boolean;
    useIsActive?: boolean;
    checked?: number[];
    toggleAll?: (row: any[][]) => void;
    toggleIndividualRow?: (rowIndex: number) => void;
}

type SortConfig = {
    columnIndex: number | null;
    direction: "desc" | "asc";
};

const Table = ({
    title,
    columns,
    rows,
    sortable,
    sortableColumns,
    checkbox,
    useIsActive,
    toggleAll,
    toggleIndividualRow,
    checked,
}: TableProps) => {
    const [sortConfig, setSortConfig] = useState<SortConfig>({ columnIndex: null, direction: "asc" });

    const activeColumns = useMemo(() => {
        if (!useIsActive) return columns;
        return columns.filter((col) => col.isActive);
    }, [useIsActive, columns]);

    const handleSortConfig = (columnIndex: number) => {
        setSortConfig((prev) => {
            if (prev.columnIndex === columnIndex) {
                return {
                    columnIndex,
                    direction: prev.direction === "asc" ? "desc" : "asc",
                };
            }
            return { columnIndex, direction: "asc" };
        });
    };

    const sortedRows = useMemo(() => {
        if (sortConfig.columnIndex !== null) {
            return sortTableData(rows, sortConfig.columnIndex, sortConfig.direction);
        }
        return rows;
    }, [rows, sortConfig]);

    return (
        <View>
            <ScrollView>
                <View className="px-4 flex-row items-center justify-start gap-4 border-b border-base-100 bg-base-100 dark:bg-base-100-dark">
                    {/* Checkbox column */}
                    {checkbox && (
                        <Pressable className="active:opacity-40" onPress={() => toggleAll?.(rows)}>
                            <View
                                className={`w-4 h-4 border border-white flex-row items-center justify-center ${checked?.length === rows.length ? "bg-primary" : ""} ${checked?.length ? "bg-primary" : ""}`}
                            >
                                {checked?.length === rows.length ? (
                                    <IconCheck size={14} color={"white"} />
                                ) : checked && checked.length > 0 ? (
                                    <IconMinus size={14} color={"white"} />
                                ) : null}
                            </View>
                        </Pressable>
                    )}

                    {/* Column label */}
                    <View className="flex-row items-center justify-start gap-4">
                        {activeColumns?.map((column, index) => (
                            <View key={index} className="p-4 w-52 flex-row items-center justify-start gap-4">
                                <Text variant={"label-large"}>{column.label}</Text>
                                {sortable && sortableColumns?.includes(index) && (
                                    <>
                                        <Pressable
                                            onPress={() => handleSortConfig(index)}
                                            className="active:opacity-40"
                                        >
                                            {sortConfig.columnIndex === index ? (
                                                sortConfig.direction === "asc" ? (
                                                    <IconTriangleFilled size={12} color="grey" />
                                                ) : (
                                                    <IconTriangleInvertedFilled size={12} color="grey" />
                                                )
                                            ) : (
                                                <IconTriangleFilled size={12} color="grey" />
                                            )}
                                        </Pressable>
                                    </>
                                )}
                            </View>
                        ))}
                    </View>
                </View>

                {/* Rows data */}
                {sortedRows.map((row, index) => (
                    <View key={index} className="px-4 flex-row items-center justify-start gap-4">
                        {/* Checkbox row */}
                        {checkbox && (
                            <Pressable className="active:opacity-40" onPress={() => toggleIndividualRow?.(index)}>
                                <View
                                    className={`w-4 h-4 border border-white flex-row items-center justify-center ${checked?.includes(index) ? "bg-primary" : ""}`}
                                >
                                    {checked?.includes(index) && <IconCheck size={14} color={"white"} />}
                                </View>
                            </Pressable>
                        )}

                        <View key={index} className=" flex-row items-center justify-start gap-4">
                            {row.map((cell: any, index: any) => {
                                const column = activeColumns[index];
                                return (
                                    <View key={index} className="w-52 p-4">
                                        {column.label === "Edit" ? (
                                            <Pressable>
                                                <IconEdit size={24} color={"#7367f0"} />
                                            </Pressable>
                                        ) : (
                                            <Text>{cell}</Text>
                                        )}
                                    </View>
                                );
                            })}
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

export default Table;
