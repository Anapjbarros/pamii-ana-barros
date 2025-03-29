import { Text, View } from "react-native";
import { Button } from '@rneui/themed';
import { Icon } from '@rneui/themed';
import { Avatar } from '@rneui/themed';
import { LinearProgress } from '@rneui/themed';




export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello.</Text>
       <br />
       <Button title="Outline" type="outline" />
       <br />
       <Button title="Clear" type="clear" />

       <Avatar
    size={32}
    rounded
    title="AB"
    containerStyle={{ backgroundColor: "purple" }}
    
  />
      
    </View>

  );
}
