import { VehicleStatusState } from "@/features/vehicles/hooks/useVehicle";
import { sortTableData } from "@/lib/sortTableData";
import {
    IconArrowRight,
    IconCheck,
    IconCircleCheck,
    IconDotsVertical,
    IconEdit,
    IconExclamationCircle,
    IconFileDislike,
    IconHourglassHigh,
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
    isStatusActive?: VehicleStatusState;
    checked?: number[];
    sortableColumns?: number[];
    rows: (string | number)[][];
    onEditClick?: (index: number) => void;
    onHistoryClick?: (index: number) => void;
    toggleAll?: (row: any[][]) => void;
    toggleRowStatus?: (index: number) => void;
    toggleIndividualRow?: (rowIndex: number) => void;
    onVerticalDotClick?: (index: number) => void;
    onVehicleInfoClick?: (index: number, cell: string | number) => void;
    translateXRow?: Animated.AnimatedInterpolation<string | number>[];
}

type SortConfig = {
    columnIndex: number | null;
    direction: "desc" | "asc";
};

type CheckBoxProps = {
    checked: boolean;
    checkedLength?: number;
    onPress: () => void;
};

interface RowComponentProps extends Partial<TableProps> {
    rowIndex: number;
    colIndex: number;
    cell: string | number;
    column: Column;
}

const CheckBoxComponent = ({ checked, checkedLength, onPress }: CheckBoxProps) => {
    return (
        <Pressable className="active:opacity-40" onPress={onPress}>
            <View
                className={`w-4 h-4 border border-white flex-row items-center justify-center ${checked ? "bg-primary" : ""} ${checkedLength ? "bg-primary" : ""}`}
            >
                {checked && <IconCheck size={14} color={"white"} />}
                {(checkedLength ?? 0) > 0 && !checked && <IconMinus size={14} color={"white"} />}
            </View>
        </Pressable>
    );
};

const RowComponent = ({
    rowIndex,
    title,
    cell,
    column,
    toggleRowStatus,
    isStatusActive,
    translateXRow,
    onEditClick,
    onHistoryClick,
    onVehicleInfoClick,
}: RowComponentProps) => {
    switch (column.label) {
        //------------------- History Table ------------------//
        case "Status":
            if (title !== "Checklist") {
                return (
                    <View className="flex-row items-center gap-4">
                        <Pressable
                            onPress={() => toggleRowStatus?.(rowIndex)}
                            style={{
                                width: 60,
                                height: 30,
                                borderRadius: 15,
                                backgroundColor: isStatusActive?.editVehicleTableStatus[rowIndex]
                                    ? "#10b981"
                                    : "#d1d5db",
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
                                {isStatusActive?.editVehicleTableStatus?.[rowIndex] && (
                                    <IconCheck size={18} color="#10b981" />
                                )}
                            </Animated.View>
                        </Pressable>
                    </View>
                );
            }
            return (
                <View className="w-1/2 rounded bg-green-300/70">
                    <Text className="text-center p-1">{cell}</Text>
                </View>
            );

        case "Edit":
            return (
                <Pressable onPress={() => onEditClick?.(rowIndex)}>
                    <IconEdit size={24} color={"#7367f0"} />
                </Pressable>
            );
        case "History":
            return (
                <Pressable onPress={() => onHistoryClick?.(rowIndex)}>
                    <IconArrowRight size={24} color={"#7367f0"} />
                </Pressable>
            );
        //------------------- Auto Emailer Table ------------------//
        case "Location":
            return (
                <View className="items-start">
                    <Text className="px-2 py-1 rounded bg-base-100 dark:bg-base-100-dark">{cell}</Text>
                </View>
            );
        case "Emailer types":
            return <Text className="py-1 rounded bg-red-300 text-center">{cell}</Text>;
        //------------------- Checklist Table ------------------//
        case "Alert Status":
            return (
                <View className="flex-row items-center gap-4">
                    <View className="rounded bg-orange-300/70">
                        <Text className="text-center p-1">{cell}</Text>
                    </View>
                </View>
            );
        //------------------- Search Table ------------------//
        case "Approval":
            if (cell === "Accepted") {
                return <IconCircleCheck size={24} color={"#10b981"} />;
            } else if (cell === "Pending Review") {
                return <IconHourglassHigh size={24} color={"#f59e0b"} />;
            } else {
                return <IconFileDislike size={24} color={"#ef4444"} />;
            }
        case "Inspection Status":
            return (
                <View
                    className={`flex-row items-center justify-center rounded ${
                        cell === "Completed"
                            ? "bg-green-300/70"
                            : cell === "Incomplete"
                              ? "bg-red-300/70"
                              : "bg-yellow-300/70"
                    }`}
                >
                    <Text>{cell}</Text>
                </View>
            );
        case "Defects/Damages":
            if (cell === "New Damages") {
                return <IconExclamationCircle size={20} color={"#ef4444"} />;
            } else if (cell === "Existing Damages") {
                return <IconExclamationCircle size={20} color={"#f59e0b"} />;
            } else {
                return <IconCheck size={20} color={"#10b981"} />;
            }
        case "Vehicle Info":
            return (
                <Pressable className="active:opacity-40" onPress={() => onVehicleInfoClick?.(rowIndex, cell)}>
                    <Text>{cell}</Text>
                </Pressable>
            );
        default:
            return <Text>{cell}</Text>;
    }
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
    isStatusActive,
    translateXRow,
    onEditClick,
    onHistoryClick,
    onVerticalDotClick,
    onVehicleInfoClick,
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
            <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
                <View className="px-4 flex-row items-center justify-start gap-4 border-b border-base-100 bg-base-200 dark:bg-base-100-dark">
                    {/* Checkbox column */}
                    {checkbox && (
                        <CheckBoxComponent
                            checked={checked?.length === rows.length}
                            checkedLength={checked?.length}
                            onPress={() => toggleAll?.(rows)}
                        />
                    )}

                    {/* Column label */}
                    <View className="flex-row items-center justify-start gap-4">
                        {activeColumns?.map((column) => (
                            <View key={column.id} className="px-6 py-4 w-56 flex-row items-center justify-start gap-4">
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
                    <View key={rowIndex} className="relative px-4 flex-row items-center justify-between gap-4">
                        {/* Checkbox row */}
                        {checkbox && (
                            <CheckBoxComponent
                                checked={checked?.includes(rowIndex) ?? false}
                                onPress={() => toggleIndividualRow?.(rowIndex)}
                            />
                        )}
                        <View key={rowIndex} className=" flex-row items-center justify-start gap-4">
                            {activeColumns.map((column, colIndex: number) => {
                                const cell = row[column.id - 1];
                                return (
                                    <View key={colIndex} className="w-56 py-4 px-6">
                                        <RowComponent
                                            rowIndex={rowIndex}
                                            colIndex={colIndex}
                                            title={title}
                                            cell={cell}
                                            column={column}
                                            toggleRowStatus={toggleRowStatus}
                                            isStatusActive={isStatusActive}
                                            translateXRow={translateXRow}
                                            onEditClick={onEditClick}
                                            onHistoryClick={onHistoryClick}
                                            onVehicleInfoClick={onVehicleInfoClick}
                                        />
                                    </View>
                                );
                            })}
                        </View>
                        {title !== "Checklist" && title !== "Search" && title !== "Auto Emailer" ? null : (
                            <Pressable className="active:opacity-40" onPress={() => onVerticalDotClick?.(rowIndex)}>
                                <IconDotsVertical size={24} color={"grey"} />
                            </Pressable>
                        )}
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

export default Table;
