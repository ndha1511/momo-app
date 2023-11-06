import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";

export default function ButtonBanner(props) {

    const [isSelected, setSelected] = useState([true, false, false, false, false, false, false, false, false, false, false, false, false]);





    return (
        <ScrollView horizontal={true} style={[styles.horizontalSroll, { paddingHorizontal: 5, marginTop: 10 }]}>

            <TouchableOpacity
                style={[styles.btn, {
                    backgroundColor: isSelected[0] ? 'pink' : '#f0f0f0',
                    borderColor: isSelected[0] ? 'green' : '',
                    borderWidth: isSelected[0] ? 3 : 0
                }]}

            >
                <Text style={[styles.txt, { color: isSelected[0] ? 'red' : 'black' }]}>Dịch vụ phổ biến</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.btn, {
                    backgroundColor: isSelected[1] ? 'pink' : '#f0f0f0',
                    borderColor: isSelected[1] ? 'green' : '',
                    borderWidth: isSelected[1] ? 3 : 0
                }]}

            >
                <Text style={[styles.txt, { color: isSelected[1] ? 'red' : 'black' }]}>Chuyển nhận tiền</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.btn, {
                    backgroundColor: isSelected[2] ? 'pink' : '#f0f0f0',
                    borderColor: isSelected[2] ? 'green' : '',
                    borderWidth: isSelected[2] ? 3 : 0
                }]}

            >
                <Text style={[styles.txt, { color: isSelected[2] ? 'red' : 'black' }]}>Thanh toán hóa đơn</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.btn, {
                    backgroundColor: isSelected[3] ? 'pink' : '#f0f0f0',
                    borderColor: isSelected[3] ? 'green' : '',
                    borderWidth: isSelected[3] ? 3 : 0
                }]}

            >
                <Text style={[styles.txt, { color: isSelected[3] ? 'red' : 'black' }]}>Tiện ích viễn thông</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.btn, {
                    backgroundColor: isSelected[4] ? 'pink' : '#f0f0f0',
                    borderColor: isSelected[4] ? 'green' : '',
                    borderWidth: isSelected[4] ? 3 : 0
                }]}

            >
                <Text style={[styles.txt, { color: isSelected[4] ? 'red' : 'black' }]}>Tài chính bảo hiểm</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.btn, {
                    backgroundColor: isSelected[5] ? 'pink' : '#f0f0f0',
                    borderColor: isSelected[5] ? 'green' : '',
                    borderWidth: isSelected[5] ? 3 : 0
                }]}

            >
                <Text style={[styles.txt, { color: isSelected[5] ? 'red' : 'black' }]}></Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.btn, {
                    backgroundColor: isSelected[0] ? 'pink' : '#f0f0f0',
                    borderColor: isSelected[0] ? 'green' : '',
                    borderWidth: isSelected[0] ? 3 : 0
                }]}

            >
                <Text style={[styles.txt, { color: isSelected[0] ? 'red' : 'black' }]}>Dich vu pho bien</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.btn, {
                    backgroundColor: isSelected[0] ? 'pink' : '#f0f0f0',
                    borderColor: isSelected[0] ? 'green' : '',
                    borderWidth: isSelected[0] ? 3 : 0
                }]}

            >
                <Text style={[styles.txt, { color: isSelected[0] ? 'red' : 'black' }]}>Dich vu pho bien</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.btn, {
                    backgroundColor: isSelected[0] ? 'pink' : '#f0f0f0',
                    borderColor: isSelected[0] ? 'green' : '',
                    borderWidth: isSelected[0] ? 3 : 0
                }]}

            >
                <Text style={[styles.txt, { color: isSelected[0] ? 'red' : 'black' }]}>Dich vu pho bien</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.btn, {
                    backgroundColor: isSelected[0] ? 'pink' : '#f0f0f0',
                    borderColor: isSelected[0] ? 'green' : '',
                    borderWidth: isSelected[0] ? 3 : 0
                }]}

            >
                <Text style={[styles.txt, { color: isSelected[0] ? 'red' : 'black' }]}>Dich vu pho bien</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.btn, {
                    backgroundColor: isSelected[0] ? 'pink' : '#f0f0f0',
                    borderColor: isSelected[0] ? 'green' : '',
                    borderWidth: isSelected[0] ? 3 : 0
                }]}

            >
                <Text style={[styles.txt, { color: isSelected[0] ? 'red' : 'black' }]}>Dich vu pho bien</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.btn, {
                    backgroundColor: isSelected[0] ? 'pink' : '#f0f0f0',
                    borderColor: isSelected[0] ? 'green' : '',
                    borderWidth: isSelected[0] ? 3 : 0
                }]}

            >
                <Text style={[styles.txt, { color: isSelected[0] ? 'red' : 'black' }]}>Dich vu pho bien</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.btn, {
                    backgroundColor: isSelected[0] ? 'pink' : '#f0f0f0',
                    borderColor: isSelected[0] ? 'green' : '',
                    borderWidth: isSelected[0] ? 3 : 0
                }]}

            >
                <Text style={[styles.txt, { color: isSelected[0] ? 'red' : 'black' }]}>Dich vu pho bien</Text>
            </TouchableOpacity>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    btn: {
        //backgroundColor: '#f0f0f0',
        marginRight: 10,
        borderRadius: 18,
        width: "auto",
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    txt: {
        fontSize: 16
    },
    horizontalSroll: {
        flexDirection: 'row'
    },
});