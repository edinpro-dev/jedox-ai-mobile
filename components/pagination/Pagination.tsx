import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react-native";
import React from "react";
import { View } from "react-native";
import { Button } from "../button";
import { Text } from "../text";

interface PaginationProps {
    page: number;
    totalPage: number;
    onNext: () => void;
    onPrev: () => void;
}

const Pagination = ({ page, totalPage, onNext, onPrev }: PaginationProps) => {
    return (
        <View className="flex-row items-center justify-end">
            <Text>
                {page + 1} / {totalPage}
            </Text>
            <Button variant="ghost" onPress={onPrev}>
                <IconChevronLeft size={24} color={"white"} />
            </Button>

            <Button variant="ghost" onPress={onNext}>
                <IconChevronRight size={24} color={"white"} />
            </Button>
        </View>
    );
};

export default Pagination;
