import { Column } from "@/features/search/components/search-settings/Settings";
import React from "react";
import { ScrollView, View } from "react-native";
import { Text } from "../text";

interface TableProps {
    title: string;
    columns: Column[];
    rows: (string | number)[][];
}

const Table = ({ title, columns, rows }: TableProps) => {
    const activeColumns = columns.filter((col) => col.isActive === true);

    return (
        <View>
            <ScrollView>
                <View className="border-b border-base-100 bg-base-100 dark:bg-base-100-dark">
                    <View className="p-4 flex-row gap-4 ">
                        {activeColumns?.map((column, index) => (
                            <View key={index} className="w-52">
                                <Text variant={"label-large"}>{column.label}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                {rows.map((row, index) => (
                    <View key={index} className="p-4 flex-row gap-4">
                        {row.map((cell, index) => (
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
