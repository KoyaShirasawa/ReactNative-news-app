import React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';
import { WebView } from "react-native-webview";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default ArticleScreen = ({route}) => {
    const {article} = route.params;
    return (
        <SafeAreaView style={style.container}>
            <WebView source={{ url: article.url}} />
        </SafeAreaView>
    );
};