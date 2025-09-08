import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { CalendarModal } from '@/components/modals/calendar';
import { Select } from '@/components/select';
import { useSearch } from '@/components/tabBar/search/search';
import { Text } from '@/components/text';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { DataTable } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const search = () => {
    const { createdData, colors, isCalendarOpen, setIsCalendarOpen, selectedDate, setSelectedDate, inspectionStatusData, damageStatusData, filteredData, setFilteredData, defectsData, approvalStatusData, inspectionTypeData, subLocationData, paginationData, displayRows, page, setPage, totalRows, startPage, endPage } = useSearch();
    return (
        <SafeAreaView
            edges={["left", "right", "bottom"]}
            className='flex-1 bg-base-300 dark:bg-base-300-dark'
        >
            <ScrollView
                className='flex-1'
            >
                <View className='border-b border-base-100 dark:border-base-100-dark'>
                    <Text variant={"h4"} className='p-4'>
                        Search inspections
                    </Text>

                    {/* Search Inputs */}
                    <View className='p-4 gap-4'>
                        <Input
                            placeholder='🔍Search License plate/Vehicle number/VIN/Customer name/Quote ID'
                        />

                        {/* Disabled input */}
                        <Input
                            disabled={true}
                            placeholder='🔍Jedox Couriers'
                        />

                        {/* Created by select */}
                        <Select
                            data={createdData}
                            renderMode="checkbox"
                            placeholder='🔍Created by'
                            value={filteredData.createdBy}
                            onChange={(val) => {
                                if (Array.isArray(val)) setFilteredData((prev) => ({ ...prev, createdBy: val }));
                            }} />

                        {/* Date Input */}
                        <Input
                            iconRight={
                                <AntDesign
                                    name="calendar"
                                    size={24}
                                    color={colors.accent}
                                    onPress={() => setIsCalendarOpen(true)}
                                />}
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
                            placeholder='Inspection Status'
                            renderMode='checkbox'
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
                            renderMode='checkbox'
                            placeholder='Damage Status'

                        />

                        {/* Defects select */}
                        <Select
                            data={defectsData}
                            value={filteredData.defects}
                            onChange={(val) => {
                                if (Array.isArray(val)) setFilteredData((prev) => ({ ...prev, defects: val }));
                            }}
                            renderMode='checkbox'
                            placeholder='🔍Defects'
                        />

                        {/* Approval status select */}
                        <Select
                            data={approvalStatusData}
                            value={filteredData.approvalStatus}
                            onChange={(val) => {
                                if (Array.isArray(val)) setFilteredData((prev) => ({ ...prev, approvalStatus: val }));
                            }}
                            renderMode='checkbox'
                            placeholder='Approval Status'
                        />

                        {/* Inspection type select */}
                        <Select
                            data={inspectionTypeData}
                            value={filteredData.inspectionType}
                            onChange={(val) => {
                                if (Array.isArray(val)) setFilteredData((prev) => ({ ...prev, inspectionType: val }));
                            }}
                            renderMode='checkbox'
                            placeholder='🔍Inspection Type'
                        />

                        {/* Sub location select */}
                        <Select
                            data={subLocationData}
                            value={filteredData.subLocation}
                            onChange={(val) => {
                                if (Array.isArray(val)) setFilteredData((prev) => ({ ...prev, subLocation: val }));
                            }}
                            renderMode='checkbox'
                            placeholder='Sub Localtion'
                        />
                    </View>
                    <View className='p-4 flex-row items-center justify-end'>
                        <Button variant='ghost'>
                            <Text color={"accent"}>Clear All</Text>
                        </Button>
                        <Button variant='accent'>
                            <Text >Apply</Text>
                        </Button>
                    </View>
                </View>

                {/* Table */}
                <View className='flex-1 p-4'>
                    <View className='flex-row items-center justify-between'>
                        <Text variant={"body"}>Total Count: 24</Text>
                        <Button variant='ghost'>
                            <FontAwesome6 name="gear" size={20} color={colors.baseContent} />
                        </Button>
                    </View>

                    <ScrollView
                        horizontal
                    >
                        <DataTable>
                            {/* Header Row */}
                            <DataTable.Header
                                className='px-4 py-2bg-base-100 dark:bg-base-content'
                            >
                                {paginationData.map((item, index) => (
                                    <DataTable.Title
                                        key={index}
                                        style={{ width: 230 }}
                                    >
                                        <Text
                                            variant={"h4"}
                                        >{item.title}</Text>
                                    </DataTable.Title>
                                ))}
                            </DataTable.Header>

                            {/* Data Row */}
                            {displayRows.map((_, row) => (
                                <DataTable.Row
                                    key={row}
                                    className='px-4 py-2'
                                >
                                    {paginationData.map((item, index) => (
                                        <DataTable.Cell
                                            key={index}
                                            style={{ width: 230 }}
                                        >
                                            <Text variant={"caption"} >{item.data[startPage + row]}</Text>
                                        </DataTable.Cell>
                                    ))}
                                </DataTable.Row>
                            ))}
                        </DataTable>
                    </ScrollView>

                    {/* Data Table Pagination */}
                    <DataTable.Pagination
                        page={page}
                        numberOfPages={Math.ceil(totalRows / 2)}
                        onPageChange={(page) => setPage(page)}
                        label={`${startPage + 1} - ${Math.min(endPage, totalRows)} of ${totalRows}`}
                    >

                    </DataTable.Pagination>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default search;