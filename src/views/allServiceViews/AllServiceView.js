import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native";
import ButtonIcon from "./ButtonIcon";
import ButtonBanner from "./ButtonBanner";

export default function AllServicesView({ navigation }) {
    const dichVuPhoBienIcons = [require('../../imgs/icon/chuyen-tien.png'),
    require('../../imgs/icon/nap-tien-dien-thoai.png'),
    require('../../imgs/icon/data-3g-4g.png'),
    require('../../imgs/icon/thanh-toan-hoa-don.png'),
    require('../../imgs/icon/mua-ma-the-di-dong.png'),
    require('../../imgs/icon/thanh-toan-khoan-vay.png'),
    require('../../imgs/icon/chuyen-tien.png'),
    require('../../imgs/icon/chuyen-tien.png'),
    require('../../imgs/icon/ve-xem-phim.png'),
    require('../../imgs/icon/tui-than-tai.png')
    ];

    const dichVuPhoBienLabels = ['Chuyển tiền', 'Nạp tiền điện thoại', 'Data 3G/4G', 'Thanh toán hóa đơn',
        'Mua mã thẻ di động', 'Thanh toán khoản vay', 'Du lịch - Đi lại', 'Lì xì', 'Mua vé xem phim',
        'Túi thần tài'
    ];

    const banners = ['Dịch vụ phổ biến', 'Chuyển nhận tiền', 'Thanh toán hóa đơn', 'Tiện ích viễn thông',
        'Tài chính - Bảo hiểm', 'Thanh toán liên kết', 'Du lịch', 'Giải trí', 'Sống tốt cùng MoMo', 'Dịch vụ đối tác',
        'Dịch vụ y tế', 'Giao thông vận tải', 'Dịch vụ khác'
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.search}>
                    <TouchableOpacity style={styles.btnBack} onPress={() => { navigation.navigate('HomeScreen') }}>
                        <Text style={{ color: '#fff', fontSize: 30 }}>{'<'}</Text>
                    </TouchableOpacity>
                    <TextInput style={styles.txtSearch}></TextInput>
                </View>
                <View style={styles.navbar}>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 5, marginTop: 10 }}>Dịch vụ được ghim</Text>
                        <Text style={{ fontSize: 16, color: 'gray', marginBottom: 5 }}>Cố định dịch vụ thường dùng</Text>
                    </View>
                    <TouchableOpacity style={styles.btnEdit} >
                        <Text style={{ color: '#fff', fontSize: 30 }}>{'<'}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: '#fff' }}>
                    <ScrollView horizontal={true} style={[styles.horizontalSroll, { paddingHorizontal: 5, marginTop: 10 }]}>
                        {banners.map((banner, index) => (
                            <ButtonBanner content={banner} key={index}></ButtonBanner>
                        ))}
                    </ScrollView>
                </View>
            </View>
            <ScrollView>
                <View style={{ backgroundColor: '#fff' }}>
                    <View>
                        <Text style={styles.txtTitle}>Dịch vụ phổ biến</Text>
                    </View>
                    <View style={styles.icon}>
                        {dichVuPhoBienIcons.map((item, index) => (
                            <ButtonIcon srcImg={item} label={dichVuPhoBienLabels[index]}></ButtonIcon>
                        ))}
                    </View>
                </View>
                <View style={{ marginTop: 8, backgroundColor: '#fff' }}>
                    <View>
                        <Text style={styles.txtTitle}>Chuyển nhận tiền</Text>
                    </View>
                    <View style={styles.icon}>

                    </View>
                </View>
                <View style={{ marginTop: 8, backgroundColor: '#fff' }}>
                    <View>
                        <Text style={styles.txtTitle}>Thanh toán hóa đơn</Text>
                    </View>
                    <View style={styles.icon}>

                    </View>
                </View>
                <View style={{ marginTop: 8, backgroundColor: '#fff' }}>
                    <View>
                        <Text style={styles.txtTitle}>Tiện ích viễn thông</Text>
                    </View>
                    <View style={styles.icon}>



                    </View>
                </View>
                <View style={{ marginTop: 8, backgroundColor: '#fff' }}>
                    <View>
                        <Text style={styles.txtTitle}>Tài chính - Bảo hiểm</Text>
                    </View>
                    <View style={styles.icon}>


                    </View>
                </View>
                <View style={{ marginTop: 8, backgroundColor: '#fff' }}>
                    <View>
                        <Text style={styles.txtTitle}>Thanh toán liên kết</Text>
                    </View>
                    <View style={styles.icon}>


                    </View>
                </View>
                <View style={{ marginTop: 8, backgroundColor: '#fff' }}>
                    <View>
                        <Text style={styles.txtTitle}>Du lịch</Text>
                    </View>
                    <View style={styles.icon}>


                    </View>
                </View>
                <View style={{ marginTop: 8, backgroundColor: '#fff' }}>
                    <View>
                        <Text style={styles.txtTitle}>Giải trí</Text>
                    </View>
                    <View style={styles.icon}>


                    </View>
                </View>
                <View style={{ marginTop: 8, backgroundColor: '#fff' }}>
                    <View>
                        <Text style={styles.txtTitle}>Sống tốt cùng MoMo</Text>
                    </View>
                    <View style={styles.icon}>

                    </View>
                </View>
                <View style={{ marginTop: 8, backgroundColor: '#fff' }}>
                    <View>
                        <Text style={styles.txtTitle}>Dịch vụ đối tác</Text>
                    </View>
                    <View style={styles.icon}>

                    </View>
                </View>
                <View style={{ marginTop: 8, backgroundColor: '#fff' }}>
                    <View>
                        <Text style={styles.txtTitle}>Dịch vụ y tế</Text>
                    </View>
                    <View style={styles.icon}>

                    </View>
                </View>
                <View style={{ marginTop: 8, backgroundColor: '#fff' }}>
                    <View>
                        <Text style={styles.txtTitle}>Giao thông vận tải</Text>
                    </View>
                    <View style={styles.icon}>

                    </View>
                </View>
                <View style={{ marginTop: 8, backgroundColor: '#fff' }}>
                    <View>
                        <Text style={styles.txtTitle}>Dịch vụ khác</Text>
                    </View>
                    <View style={styles.icon}>

                    </View>
                </View>
            </ScrollView>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        //position: 'absolute',
        width: '100%',
        top: 0,
        left: 0,
        height: 'auto',
        backgroundColor: '#dd4d95',
        paddingTop: 40,
    },
    search: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    btnBack: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, 0.45)',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',

    },
    txtSearch: {
        width: '85%',
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 25,
        marginLeft: 15
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    btnEdit: {
        width: 100,
        height: 30,
        borderWidth: 1,
        borderColor: 'rgba(128, 128, 128, 0.45)',
        borderRadius: 5
    },

    icon: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingVertical: 10,
        justifyContent: 'flex-start',

    },
    horizontalSroll: {
        flexDirection: 'row'
    },
    txtTitle: { marginTop: 10, marginLeft: 10, fontWeight: 'bold' }
});
