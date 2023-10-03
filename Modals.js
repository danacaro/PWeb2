import * as React from 'react';
import {Text, Modal, View} from 'react-native';

const modalContainerStyle={
    flex: 1,
    justifyContent: 'center',
}

export default function Modals(){
    return(
        <>
        <Modal 
        visible={false}
        >

            <View>
                
                <Text>Soy un modal</Text>

            </View>

        </Modal>
        </>


    );
}