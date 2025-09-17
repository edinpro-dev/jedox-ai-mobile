import { sortTableData } from "@/lib/sortTableData";
import {
    IconCheck,
    IconEdit,
    IconMinus,
    IconTriangleFilled,
    IconTriangleInvertedFilled,
} from "@tabler/icons-react-native";
import React, { useMemo, useState } from "react";
import { Animated, Pressable, ScrollView, View } from "react-native";
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
    sortable?: boolean;
    checkbox?: boolean;
    useIsActive?: boolean;
    rowStatus?: boolean[];
    checked?: number[];
    sortableColumns?: number[];
    rows: (string | number)[][];
    onEdit?: (index: number) => void;
    toggleAll?: (row: any[][]) => void;
    toggleRowStatus?: (index: number) => void;
    toggleIndividualRow?: (rowIndex: number) => void;
    translateXRow?: Animated.AnimatedInterpolation<string | number>[];
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
    toggleRowStatus,
    rowStatus,
    translateXRow,
    onEdit,
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
            <ScrollView stickyHeaderIndices={[0]}>
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
                        {activeColumns?.map((column) => (
                            <View key={column.id} className="p-4 w-52 flex-row items-center justify-start gap-4">
                                <Text variant={"label-large"}>{column.label}</Text>
                                {sortable && sortableColumns?.includes(column.id) && (
                                    <>
                                        <Pressable
                                            onPress={() => handleSortConfig(column.id)}
                                            className="active:opacity-40"
                                        >
                                            {sortConfig.columnIndex === column.id ? (
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
                {sortedRows.map((row, rowIndex) => (
                    <View key={rowIndex} className="px-4 flex-row items-center justify-start gap-4">
                        {/* Checkbox row */}
                        {checkbox && (
                            <Pressable className="active:opacity-40" onPress={() => toggleIndividualRow?.(rowIndex)}>
                                <View
                                    className={`w-4 h-4 border border-white flex-row items-center justify-center ${checked?.includes(rowIndex) ? "bg-primary" : ""}`}
                                >
                                    {checked?.includes(rowIndex) && <IconCheck size={14} color={"white"} />}
                                </View>
                            </Pressable>
                        )}

                        <View key={rowIndex} className=" flex-row items-center justify-start gap-4">
                            {row.map((cell: any, colIndex: any) => {
                                const column = activeColumns[colIndex];
                                return (
                                    <View key={colIndex} className="w-52 p-4">
                                        {column.label === "Edit" ? (
                                            <Pressable onPress={() => onEdit?.(rowIndex)}>
                                                <IconEdit size={24} color={"#7367f0"} />
                                            </Pressable>
                                        ) : column.label === "Status" ? (
                                            <View className="flex-row items-center gap-4">
                                                <Pressable
                                                    onPress={() => toggleRowStatus?.(rowIndex)}
                                                    style={{
                                                        width: 60,
                                                        height: 30,
                                                        borderRadius: 15,
                                                        backgroundColor: rowStatus?.[rowIndex] ? "#10b981" : "#d1d5db",
                                                        justifyContent: "center",
                                                        padding: 2,
                                                    }}
                                                >
                                                    <Animated.View
                                                        style={{
                                                            width: 26,
                                                            height: 26,
                                                            borderRadius: 13,
                                                            backgroundColor: "white",
                                                            transform: [
                                                                {
                                                                    translateX: (translateXRow?.[rowIndex] as any) ?? 0,
                                                                },
                                                            ],
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                        }}
                                                    >
                                                        {rowStatus?.[rowIndex] && (
                                                            <IconCheck size={18} color="#10b981" />
                                                        )}
                                                    </Animated.View>
                                                </Pressable>
                                            </View>
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
