import * as paperColor from './../../../node_modules/react-native-paper/src/styles/themes/v2/colors';
import { StyleSheet } from "react-native";
import themes from "../../themes";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: paperColor.white,
    justifyContent: "center",    
    alignItems: 'center'
  },
  
  logoContainer: {
    alignItems: "center",
  },

  logoText: {
    color: paperColor.grey800,
    marginTop: 10,
    fontSize: 30,
    fontWeight: 'bold'
  },

  descriptionContainer: {
    alignItems: "center",
    justifyContent: 'center',
    marginTop: 44,   
  },

  descriptionTitle: {
    letterSpacing: 0.15,
    color: paperColor.grey800
  },

  descriptionText: {
    fontWeight: "400",
    letterSpacing: 0.25,
    textAlign: 'center',
    width: 312,
    marginTop: 10
  },
  buttonContainer: {
    marginTop: 50,
    width: '75%',   
  },

 
  button: {
      borderRadius: 4, 
      borderColor: paperColor.grey400,
  }
});

export default styles;
