import { Column } from "@/features/search/components/search-settings/Settings";
import { sortTableData } from "@/lib/sortTableData";
import { IconTriangleFilled, IconTriangleInvertedFilled } from "@tabler/icons-react-native";
import React, { useMemo, useState } from "react";
import { Pressable, ScrollView, View } from "react-native";
import { Text } from "../text";

interface TableProps {
    title: string;
    columns: Column[];
    rows: (string | number)[][];
    sortable?: boolean;
    sortableColumns?: number[];
}

type SortConfig = {
    columnIndex: number | null;
    direction: "desc" | "asc";
};

const Table = ({ title, columns, rows, sortable, sortableColumns }: TableProps) => {
    const [sortConfig, setSortConfig] = useState<SortConfig>({ columnIndex: null, direction: "asc" });

    const activeColumns = useMemo(() => columns.filter((col) => col.isActive), [columns]);

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
                <View className="border-b border-base-100 bg-base-100 dark:bg-base-100-dark">
                    <View className="flex-row gap-4">
                        {activeColumns?.map((column, index) => (
                            <View key={index} className="w-52 p-4 flex-row items-center justify-start gap-4">
                                <Text variant={"label-large"}>{column.label}</Text>
                                {sortable && sortableColumns?.includes(index) && (
                                    <Pressable onPress={() => handleSortConfig(index)} className="active:opacity-40">
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
                                )}
                            </View>
                        ))}
                    </View>
                </View>

                {sortedRows.map((row, index) => (
                    <View key={index} className="p-4 flex-row gap-4">
                        {row.map((cell: any, index: any) => (
                            <View key={index} className="w-52">
                                <Text>{cell}</Text>
                            </View>
                        ))}
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

export default Table;
