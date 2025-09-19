import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { CalendarModal } from "@/components/modals/calendar";
import { Pagination } from "@/components/pagination";
import { Select } from "@/components/select";
import { Table } from "@/components/table";
import { Text } from "@/components/text";
import Settings from "@/features/search/components/search-settings/Settings";
import { useSearch } from "@/features/search/hooks/useSearch";
import { IconCalendar, IconSearch, IconSettings } from "@tabler/icons-react-native";
import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Search = () => {
    const {
        createdData,
        colors,
        isCalendarOpen,
        setIsCalendarOpen,
        selectedDate,
        setSelectedDate,
        inspectionStatusData,
        damageStatusData,
        filteredData,
        setFilteredData,
        defectsData,
        approvalStatusData,
        inspectionTypeData,
        subLocationData,
        setIsSettingsOpen,
        isSettingsOpen,
        columns,
        toggleActive,
        handleDragEnd,
        handleApply,
        handleSaveAndApply,
        nextPage,
        prevPage,
        page,
        totalPage,
        displayRows,
    } = useSearch();
    return (
        <SafeAreaView edges={["left", "right", "bottom"]} className="flex-1">
            <ScrollView className="flex-1">
                <View className="border-b border-base-100 dark:border-base-100-dark">
                    <Text variant={"h4"} className="p-4">
                        Search inspections
                    </Text>

                    {/* Search Inputs */}
                    <View className="p-4 gap-4">
                        <Input
                            placeholder="Search License plate/Vehicle number/VIN/Customer name/Quote ID"
                            iconLeft={<IconSearch size={18} color={colors.primary} />}
                        />

                        {/* Disabled input */}
                        <Input
                            disabled={true}
                            placeholder="Jedox Couriers"
                            iconLeft={<IconSearch size={18} color={colors.primary} />}
                        />

                        {/* Created by select */}
                        <Select
                            data={createdData}
                            renderMode="checkbox"
                            placeholder="Created by"
                            value={filteredData.createdBy}
                            onChange={(val) => {
                                if (Array.isArray(val)) setFilteredData((prev) => ({ ...prev, createdBy: val }));
                            }}
                        />

                        {/* Date Input */}
                        <Input
                            iconRight={
                                <IconCalendar size={24} color={colors.accent} onPress={() => setIsCalendarOpen(true)} />
                            }
                            value={selectedDate.toDateString()}
                        />
                        {isCalendarOpen && (
                            <CalendarModal
                                visible={isCalendarOpen}
                                setVisible={setIsCalendarOpen}
                                value={selectedDate}
                                onSelectDate={setSelectedDate}
                            />
                        )}

                        {/* Inspection status select */}
                        <Select
                            search={false}
                            data={inspectionStatusData}
                            value={filteredData.inspectionStatus}
                            placeholder="Inspection Status"
                            renderMode="checkbox"
                            onChange={(val) => {
                                if (Array.isArray(val)) setFilteredData((prev) => ({ ...prev, inspectionStatus: val }));
                            }}
                        />

                        {/* Damage Status select */}
                        <Select
                            data={damageStatusData}
                            value={filteredData.damageStatus}
                            onChange={(val) => {
                                if (Array.isArray(val)) setFilteredData((prev) => ({ ...prev, damageStatus: val }));
                            }}
                            renderMode="checkbox"
                            placeholder="Damage Status"
                        />

                        {/* Defects select */}
                        <Select
                            data={defectsData}
                            value={filteredData.defects}
                            onChange={(val) => {
                                if (Array.isArray(val)) setFilteredData((prev) => ({ ...prev, defects: val }));
                            }}
                            renderMode="checkbox"
                            placeholder="Defects"
                            leftIcon={<IconSearch size={18} color={colors.primary} />}
                        />

                        {/* Approval status select */}
                        <Select
                            data={approvalStatusData}
                            value={filteredData.approvalStatus}
                            onChange={(val) => {
                                if (Array.isArray(val)) setFilteredData((prev) => ({ ...prev, approvalStatus: val }));
                            }}
                            renderMode="checkbox"
                            placeholder="Approval Status"
                        />

                        {/* Inspection type select */}
                        <Select
                            data={inspectionTypeData}
                            value={filteredData.inspectionType}
                            onChange={(val) => {
                                if (Array.isArray(val)) setFilteredData((prev) => ({ ...prev, inspectionType: val }));
                            }}
                            renderMode="checkbox"
                            placeholder="Inspection Type"
                            leftIcon={<IconSearch size={18} color={colors.primary} />}
                        />

                        {/* Sub location select */}
                        <Select
                            data={subLocationData}
                            value={filteredData.subLocation}
                            onChange={(val) => {
                                if (Array.isArray(val)) setFilteredData((prev) => ({ ...prev, subLocation: val }));
                            }}
                            renderMode="checkbox"
                            placeholder="Sub Localtion"
                        />
                    </View>
                    <View className="p-4 flex-row items-center justify-end">
                        <Button variant="ghost">
                            <Text color={"accent"}>Clear All</Text>
                        </Button>
                        <Button variant="accent">
                            <Text>Apply</Text>
                        </Button>
                    </View>
                </View>

                {/* Table */}
                <View className="flex-1 p-4">
                    <View className="flex-row items-center justify-between">
                        <Text variant={"body"}>Total Count: 24</Text>
                        <Button variant="ghost" onPress={() => setIsSettingsOpen(true)}>
                            <IconSettings size={20} color={colors.baseContent} />
                        </Button>
                    </View>

                    {isSettingsOpen && (
                        <Settings
                            isVisible={isSettingsOpen}
                            setIsSettingsOpen={setIsSettingsOpen}
                            columns={columns}
                            toggleActive={toggleActive}
                            handleDragEnd={handleDragEnd}
                            onApply={handleApply}
                            onSaveApply={handleSaveAndApply}
                        />
                    )}

                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <Table
                            title="Assessment"
                            columns={columns}
                            rows={displayRows}
                            sortable={true}
                            useIsActive
                            sortableColumns={[1, 3, 9, 10, 11, 12, 13]}
                        />
                    </ScrollView>

                    {/* Data Table Pagination */}
                    <Pagination page={page} totalPage={totalPage} onNext={nextPage} onPrev={prevPage} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Search;
