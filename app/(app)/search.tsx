import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { CalendarModal } from "@/components/modals/calendar";
import { Pagination } from "@/components/pagination";
import { Select } from "@/components/select";
import { Table } from "@/components/table";
import { Text } from "@/components/text";
import { DeleteRowOptions } from "@/features/search/components/modals/delete-row";
import Settings from "@/features/search/components/modals/search-settings/Settings";
import { useSearch } from "@/features/search/hooks/useSearch";
import { IconCalendar, IconSearch, IconSettings } from "@tabler/icons-react-native";
import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Search = () => {
    const {
        createdData,
        colors,
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
        columns,
        toggleActive,
        handleDragEnd,
        handleApply,
        handleSaveAndApply,
        nextPage,
        prevPage,
        page,
        totalPage,
        isSearchModalOpen,
        closeModal,
        openModal,
        applyFilter,
        filteredRows,
        startPage,
        endPage,
        clearFilters,
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
                            variant="primary"
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
                            variant="primary"
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
                            variant="primary"
                            iconRight={
                                <IconCalendar
                                    size={24}
                                    color={colors.accent}
                                    onPress={() => openModal("calendarModal")}
                                />
                            }
                            value={selectedDate?.toDateString() ?? "Select a date"}
                        />
                        {isSearchModalOpen.calendarModal && (
                            <CalendarModal
                                visible={isSearchModalOpen.calendarModal}
                                setVisible={(show) => (show ? openModal("calendarModal") : closeModal("calendarModal"))}
                                value={selectedDate ?? new Date()}
                                onSelectDate={setSelectedDate}
                            />
                        )}

                        {/* Inspection status select */}
                        <Select
                            variant="primary"
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
                            variant="primary"
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
                            variant="primary"
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
                            variant="primary"
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
                            variant="primary"
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
                            variant="primary"
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
                        <Button variant="ghost" onPress={clearFilters}>
                            <Text color={"accent"}>Clear All</Text>
                        </Button>
                        <Button variant="accent" onPress={applyFilter}>
                            <Text>Apply</Text>
                        </Button>
                    </View>
                </View>

                {/* Table */}
                <View className="flex-1 p-4">
                    {filteredRows.length === 0 ? (
                        <Text>No records found</Text>
                    ) : (
                        <>
                            <View className="flex-row items-center justify-between">
                                <Text variant={"body"}>Total Count: {filteredRows.length}</Text>
                                <Button variant="ghost" onPress={() => openModal("settingsModal")}>
                                    <IconSettings size={20} color={colors.baseContent} />
                                </Button>
                            </View>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                <Table
                                    title="Search"
                                    columns={columns}
                                    rows={filteredRows.slice(startPage, endPage)}
                                    sortable={true}
                                    useIsActive
                                    sortableColumns={[2, 3, 4, 10, 11, 12, 13]}
                                    onVerticalDotClick={() => openModal("deleteModal")}
                                />
                            </ScrollView>
                            <Pagination page={page} totalPage={totalPage} onNext={nextPage} onPrev={prevPage} />
                        </>
                    )}

                    {isSearchModalOpen.settingsModal && (
                        <Settings
                            isVisible={isSearchModalOpen.settingsModal}
                            columns={columns}
                            toggleActive={toggleActive}
                            handleDragEnd={handleDragEnd}
                            onApply={handleApply}
                            onSaveApply={handleSaveAndApply}
                        />
                    )}

                    {isSearchModalOpen.deleteModal && (
                        <DeleteRowOptions isVisible={isSearchModalOpen.deleteModal} closeModal={closeModal} />
                    )}

                    {/* Data Table Pagination */}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Search;
