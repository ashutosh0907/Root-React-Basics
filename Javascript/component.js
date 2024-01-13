import React from "react";
import { Image, Modal, Pressable, ScrollView, View } from "react-native";
import { HEIGHT, MyStatusBar } from "../constants/config";
export const Loader = ({ visible = false, onBackPress, imageStyle, source, backgroundColor = `rgba(100, 100, 100, 0.5)`, }) => {
    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType='slide'
            statusBarTranslucent
            onRequestClose={() => onBackPress != undefined && onBackPress(false)}
        >
            <Pressable
                style={{
                    flex: 1,
                    backgroundColor: backgroundColor,
                    alignItems: 'center'
                }}>
                <MyStatusBar barStyle={'dark-content'} />
                <ScrollView style={{
                    height: HEIGHT * 0.8,
                    width: '95%',
                    backgroundColor: 'white',
                    position: 'absolute',
                    bottom: 0,
                    elevation: 5,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10
                }}></ScrollView>
                {/* <Image
                    style={imageStyle}
                    source={source}
                /> */}
            </Pressable>
        </Modal>
    )
}

const [modal, setModal] = useState(false);
<Loader
    visible={modal}
    onBackPress={setModal}
    // backgroundColor={'white'}
    imageStyle={{
        height: 110,
        width: 100,
    }}
    source={LOADER}
/>






