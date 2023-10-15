import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native";

export default function AllServicesView({ navigation }) {
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
                        <TouchableOpacity style={styles.btnNavbar}>
                            <Text style={styles.txtBtnTop}>Dịch vụ phổ biến</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnNavbar}>
                            <Text style={styles.txtBtnTop}>Chuyển nhận tiền</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnNavbar}>
                            <Text style={styles.txtBtnTop}>Thanh toán hóa đơn</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnNavbar}>
                            <Text style={styles.txtBtnTop}>Tiện ích viễn thông</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnNavbar}>
                            <Text style={styles.txtBtnTop}>Tài chính - Bảo hiểm</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnNavbar}>
                            <Text style={styles.txtBtnTop}>Thanh toán liên kết</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnNavbar}>
                            <Text style={styles.txtBtnTop}>Du lịch</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnNavbar}>
                            <Text style={styles.txtBtnTop}>Giải trí</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnNavbar}>
                            <Text style={styles.txtBtnTop}>Sống tốt cùng MoMo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnNavbar}>
                            <Text style={styles.txtBtnTop}>Dịch vụ đối tác</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnNavbar}>
                            <Text style={styles.txtBtnTop}>Dịch vụ y tế</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnNavbar}>
                            <Text style={styles.txtBtnTop}>Giao thông vận tải</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnNavbar}>
                            <Text style={styles.txtBtnTop}>Dịch vụ khác</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
            <ScrollView>
                <View style={{ backgroundColor: '#fff' }}>
                    <View>
                        <Text style={styles.txtTitle}>Dịch vụ phổ biến</Text>
                    </View>
                    <View style={styles.icon}>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/chuyen-tien.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Chuyển tiền</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/nap-tien-dien-thoai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Nạp tiền điện thoại</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/data-3g-4g.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Data 3G/4G</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/thanh-toan-hoa-don.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Thanh toán hóa đơn</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/mua-ma-the-di-dong.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Mua mã thẻ di động</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/thanh-toan-khoan-vay.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Thanh toán khoản vay</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/chuyen-tien.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Chuyển tiền</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/chuyen-tien.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Chuyển tiền</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/ve-xem-phim.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Mua vé xem phim</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginTop: 8, backgroundColor: '#fff' }}>
                    <View>
                        <Text style={styles.txtTitle}>Chuyển nhận tiền</Text>
                    </View>
                    <View style={styles.icon}>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginTop: 8, backgroundColor: '#fff' }}>
                    <View>
                        <Text style={styles.txtTitle}>Thanh toán hóa đơn</Text>
                    </View>
                    <View style={styles.icon}>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginTop: 8, backgroundColor: '#fff' }}>
                    <View>
                        <Text style={styles.txtTitle}>Tiện ích viễn thông</Text>
                    </View>
                    <View style={styles.icon}>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                      
                       
                    </View>
                </View>
                <View style={{ marginTop: 8, backgroundColor: '#fff' }}>
                    <View>
                        <Text style={styles.txtTitle}>Tài chính - Bảo hiểm</Text>
                    </View>
                    <View style={styles.icon}>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginTop: 8, backgroundColor: '#fff' }}>
                    <View>
                        <Text style={styles.txtTitle}>Thanh toán liên kết</Text>
                    </View>
                    <View style={styles.icon}>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                       
                    </View>
                </View>
                <View style={{ marginTop: 8, backgroundColor: '#fff' }}>
                    <View>
                        <Text style={styles.txtTitle}>Du lịch</Text>
                    </View>
                    <View style={styles.icon}>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                       
                    </View>
                </View>
                <View style={{ marginTop: 8, backgroundColor: '#fff' }}>
                    <View>
                        <Text style={styles.txtTitle}>Giải trí</Text>
                    </View>
                    <View style={styles.icon}>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>     
            
                    </View>
                </View>
                <View style={{ marginTop: 8, backgroundColor: '#fff' }}>
                    <View>
                        <Text style={styles.txtTitle}>Sống tốt cùng MoMo</Text>
                    </View>
                    <View style={styles.icon}>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginTop: 8, backgroundColor: '#fff' }}>
                    <View>
                        <Text style={styles.txtTitle}>Dịch vụ đối tác</Text>
                    </View>
                    <View style={styles.icon}>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginTop: 8, backgroundColor: '#fff' }}>
                    <View>
                        <Text style={styles.txtTitle}>Dịch vụ y tế</Text>
                    </View>
                    <View style={styles.icon}>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginTop: 8, backgroundColor: '#fff' }}>
                    <View>
                        <Text style={styles.txtTitle}>Giao thông vận tải</Text>
                    </View>
                    <View style={styles.icon}>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginTop: 8, backgroundColor: '#fff' }}>
                    <View>
                        <Text style={styles.txtTitle}>Dịch vụ khác</Text>
                    </View>
                    <View style={styles.icon}>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
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
    horizontalSroll: {
        flexDirection: 'row'
    },
    btnNavbar: {
        backgroundColor: '#f0f0f0',
        marginRight: 10,
        borderRadius: 18,
        width: "auto",
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    txtBtnTop: {
        fontSize: 16
    },
    icon: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingVertical: 10,
        justifyContent: 'flex-start',

    },
    iconButton: {
        width: 85,
        height: 80,
        alignItems: 'center',
        marginHorizontal: 8,
        
    },
    imgIcon: {
        width: 40,
        height: 40
    },
    txtIcon: {
        textAlign: 'center',
        marginTop: 3,
        fontSize: 10
    },
    txtTitle: { marginTop: 10, marginLeft: 10, fontWeight: 'bold' }
});
