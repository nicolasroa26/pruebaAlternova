import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    contain:{
        width: "90%", 
        minHeight:100, 
        backgroundColor: "#F0E9D2", 
        marginTop: 15, 
        alignSelf:"center", 
        borderRadius:15, 
        flexDirection:"row", 
        padding:10
    },
    container: { 
        alignItems:"center"
    },
    cont: {
        flexDirection:"row", 
        alignItems:"center", 
        justifyContent: "space-around"
    },
    icon: {
        width: 80,
        height: 80,
    },
    cartImage: {
        height:25, 
        width:25, 
        resizeMode:"contain"
    },
    bigIcon: {
        width: 250,
        height: 250,
    },
    textName: {
        fontWeight:"bold", 
        marginHorizontal:30, 
        marginVertical:5
    },
    textPrice: {
        marginHorizontal:30
    }, 
    textAlignTitle: {
        textAlign:"center", 
        fontSize:18, 
        color: "#000", 
        marginTop:15
    },
    productDetails: {
        color:"#000", 
        fontWeight:"bold", 
        fontSize:15, 
        marginHorizontal:20
    },
    detailsTitle: {
        color:"#000", 
        fontWeight:"bold", 
        fontSize:20, 
        marginHorizontal:20
    },
    detailsText: {
        fontSize:10, 
        color:"#000"
    },
    cartIcon: {
        height:30, 
        width:30
    },
    textAddCart: {
        fontSize:10, 
        color:"#000"
    },
    buttonAddCart: {
        backgroundColor: "#678983",
        marginHorizontal:30,
        minHeight:25,
        width: 100,
        borderRadius:5,
        justifyContent:"center",
        alignItems:"center",
        marginTop:5
    },
    productAddCart: {
        backgroundColor: "#678983", 
        marginHorizontal:20, 
        minHeight:40, 
        width:"90%", 
        borderRadius:10, 
        justifyContent:"center", 
        alignItems:"center", 
        marginTop:15
    },
    formStyle: {
        margin: 10,
        marginTop: 20,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor:'rgba(0,0,0,0.3)'
    },
    styleForm: { 
        color: "#fff", 
        width: '100%',
        fontSize: 15 
    },
    textError: {
        color: 'red',
        alignSelf: 'center',
        fontSize: 16
    },
    buttonLogin: { 
        marginTop:15, 
        borderRadius:10, 
        backgroundColor: "#678983", 
        alignItems:"center", 
        justifyContent: "center", 
        alignSelf:"center", 
        height:40, 
        width: "80%" 
    },
    switchView: {
        alignItems:"center", 
        marginTop:25
    }, 
    buttonProduct: {
        width: "90%", 
        minHeight:100, 
        backgroundColor: "#F0E9D2", 
        marginTop: 15, 
        alignSelf:"center", 
        borderRadius:15, 
        flexDirection:"row", 
        padding:10
    }, 
    viewDirection: {
        flexDirection: "column"
    },
    margin: {
        marginHorizontal:30
    },
    viewModal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalStyles: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    textModal: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default styles;