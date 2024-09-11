import { TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import Feather from 'react-native-vector-icons/Feather'

export default function ButtonCreate({toggleVisible}:{toggleVisible: () => void}) {
 return (
   <TouchableOpacity style={styles.container} onPress={toggleVisible}>
    <Feather name='plus' color={"#fff"} size={30}/>
   </TouchableOpacity>
  );
}