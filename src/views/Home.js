import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function Home({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TextInput style={styles.inputHeader}></TextInput>
            </View>
            <ScrollView style={{ backgroundColor: '#fff', marginBottom: 50 }}>
                <View style={styles.center}>
                    <View style={styles.icon}>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/chuyen-tien.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Chuyển tiền</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/chuyen-tien-2.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Chuyển tiền ngân hàng</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/thanh-toan-hoa-don.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Thanh toán hóa đơn</Text>
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
                            <Image source={require('../imgs/icon/tui-than-tai.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Túi thần tài</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/vi-tra-sau.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Ví trả sau</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/ve-tau-hoa.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Vé tàu hỏa</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/ve-may-bay.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Vé máy bay</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/tiet-kiem-onl.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Tiết Kiệm Online</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../imgs/icon/ve-xe-khach.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Vé xe khách</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton} onPress={() => {navigation.navigate('AllServicesScreen')}}>
                            <Image source={require('../imgs/icon/all.png')} style={styles.imgIcon}></Image>
                            <Text style={styles.txtIcon}>Tất cả dịch vụ</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 10 }}>
                        <Text style={styles.lblLeft}>MoMo đề xuất</Text>
                        <ScrollView horizontal={true} style={styles.horizontalSroll}>
                            <View style={styles.item}>
                                <TouchableOpacity style={styles.iconButton}>
                                    <Image source={require('../imgs/icon/heo-dat-momo.png')} style={styles.imgIcon}></Image>
                                    <Text style={styles.txtIcon}>Heo đất MoMo</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.item}>
                                <TouchableOpacity style={styles.iconButton}>
                                    <Image source={require('../imgs/icon/ve-xem-phim.png')} style={styles.imgIcon}></Image>
                                    <Text style={styles.txtIcon}>Mua vé xem phim</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.item}>
                                <TouchableOpacity style={styles.iconButton}>
                                    <Image source={require('../imgs/icon/vay-nhanh.png')} style={styles.imgIcon}></Image>
                                    <Text style={styles.txtIcon}>Vay nhanh</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.item}>
                                <TouchableOpacity style={styles.iconButton}>
                                    <Image source={require('../imgs/icon/thanh-toan-khoan-vay.png')} style={styles.imgIcon}></Image>
                                    <Text style={styles.txtIcon}>Thanh toán khoản vay</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.item}>
                                <TouchableOpacity style={styles.iconButton}>
                                    <Image source={require('../imgs/icon/di-bo-cung-momo.png')} style={styles.imgIcon}></Image>
                                    <Text style={styles.txtIcon}>Đi bộ cùng MoMo</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.item}>
                                <TouchableOpacity style={styles.iconButton}>
                                    <Image source={require('../imgs/icon/mua-ma-the-di-dong.png')} style={styles.imgIcon}></Image>
                                    <Text style={styles.txtIcon}>Mua mã thẻ di động</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.item}>
                                <TouchableOpacity style={styles.iconButton}>
                                    <Image source={require('../imgs/icon/gioi-thieu-doi-tac.png')} style={styles.imgIcon}></Image>
                                    <Text style={styles.txtIcon}>Giới thiệu đối tác MoMo</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.item}>
                                <TouchableOpacity style={styles.iconButton}>
                                    <Image source={require('../imgs/icon/diem-momo-tin-cay.png')} style={styles.imgIcon}></Image>
                                    <Text style={styles.txtIcon}>Điểm tin cậy MoMo</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </View>

                <View style={{ marginTop: 5 }}>
                    <Text style={styles.lblLeft}>Có thể bạn quan tâm</Text>
                    <ScrollView horizontal={true} style={styles.horizontalSroll}>
                        <View style={styles.boxCare}>
                            <TouchableOpacity style={styles.btnCare}>
                                <Image source={require('../imgs/img/uu-dai-1.png')} style={styles.boxImg} />
                            </TouchableOpacity>
                            <View></View>
                        </View>
                        <View style={styles.boxCare}>
                            <TouchableOpacity style={styles.btnCare}>
                                <Image source={require('../imgs/img/uu-dai-2.png')} style={styles.boxImg} />
                            </TouchableOpacity>
                            <Text>item 1</Text>
                        </View>
                        <View style={styles.boxCare}>
                            <TouchableOpacity style={styles.btnCare}>
                                <Image source={require('../imgs/img/uu-dai-1.png')} style={styles.boxImg} />
                            </TouchableOpacity>
                            <Text>item 1</Text>
                        </View>
                    </ScrollView>
                </View>

                <View style={{ marginTop: 5 }}>
                    <Text style={styles.lblLeft}>Ưu đãi mới</Text>
                    <View style={styles.offers}>
                        <TouchableOpacity style={styles.btnOffers}>
                            <Image source={require('../imgs/img/uu-dai-moi-1.png')} style={styles.imgOffers}></Image>
                            <Text style={styles.txtOffers}>Thứ 5 sale đậm - Bamboo Airways quẩy hè.</Text>
                            <Text>Đặt ngay</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnOffers}>
                            <Image source={require('../imgs/img/uu-dai-moi-1.png')} style={styles.imgOffers}></Image>
                            <Text style={styles.txtOffers}>Thứ 5 sale đậm - Bamboo Airways quẩy hè.</Text>
                            <Text>Đặt ngay</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnOffers}>
                            <Image source={require('../imgs/img/uu-dai-moi-1.png')} style={styles.imgOffers}></Image>
                            <Text style={styles.txtOffers}>Thứ 5 sale đậm - Bamboo Airways quẩy hè.</Text>
                            <Text>Đặt ngay</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnOffers}>
                            <Image source={require('../imgs/img/uu-dai-moi-1.png')} style={styles.imgOffers}></Image>
                            <Text style={styles.txtOffers}>Thứ 5 sale đậm - Bamboo Airways quẩy hè.</Text>
                            <Text>Đặt ngay</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnOffers}>
                            <Image source={require('../imgs/img/uu-dai-moi-1.png')} style={styles.imgOffers}></Image>
                            <Text style={styles.txtOffers}>Thứ 5 sale đậm - Bamboo Airways quẩy hè.</Text>
                            <Text>Đặt ngay</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnOffers}>
                            <Image source={require('../imgs/img/uu-dai-moi-1.png')} style={styles.imgOffers}></Image>
                            <Text style={styles.txtOffers}>Thứ 5 sale đậm - Bamboo Airways quẩy hè.</Text>
                            <Text>Đặt ngay</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnOffers}>
                            <Image source={require('../imgs/img/uu-dai-moi-1.png')} style={styles.imgOffers}></Image>
                            <Text style={styles.txtOffers}>Thứ 5 sale đậm - Bamboo Airways quẩy hè.</Text>
                            <Text>Đặt ngay</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnOffers}>
                            <Image source={require('../imgs/img/uu-dai-moi-1.png')} style={styles.imgOffers}></Image>
                            <Text style={styles.txtOffers}>Thứ 5 sale đậm - Bamboo Airways quẩy hè.</Text>
                            <Text>Đặt ngay</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{alignItems: 'center', marginVertical: 20}}>
                    <Text>Uu tien hang dau cua MoMo</Text>
                </View>


            </ScrollView>

            <View style={styles.footer}>
                <Text style={styles.lblLeft}>Có thể bạn quan tâm</Text>
                <Text style={styles.lblLeft}>Có thể bạn quan tâm</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: 'green'
    },
    header: {
        flexDirection: 'row',
        marginTop: 50,
        marginLeft: 20
    },
    inputHeader: {
        width: 250,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        color: '#fff',
        borderRadius: 13
    },
    center: {
        flex: 1,
        alignItems: 'center',
    },
    icon: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10,
        justifyContent: 'center',
    },
    iconButton: {
        width: 85,
        height: 80,
        alignItems: 'center',
        margin: 5,
        marginBottom: 15
    },
    imgIcon: {
        width: 45,
        height: 45
    },
    txtIcon: {
        textAlign: 'center',
        marginTop: 3,
        fontSize: 11.5
    },
    footer: {
        backgroundColor: '#fff',
        padding: 10,
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 50,
        zIndex: 2,
        flexDirection: 'row'
    },
    horizontalSroll: {
        flexDirection: 'row',
        paddingHorizontal: 7,
        paddingVertical: 15
    },
    item: {
        width: 100
    },
    lblLeft: {
        fontSize: 20,
        paddingLeft: 10
    },
    boxCare: {
        width: 350,
        height: 250,
        backgroundColor: 'red',
        marginHorizontal: 5,
        borderRadius: 15
    },
    boxImg: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    btnCare: {
        width: '100%',
        height: '75%',
    },
    offers: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10,
       
    },
    imgOffers: {
        width: 185,
        height: 180,
        borderRadius: 15
        
    },
    txtOffers: {
        width: 180,
        textAlign: 'left',
        color: 'red'
    },
    btnOffers: {
        marginRight: 10
    }
});