import Geolocation from '@react-native-community/geolocation';
import { Button, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { saveCheckIn } from './redux/checkinSlice';

export default function CheckIn() {
  const dispatch = useDispatch();
  const lastCheckIn = useSelector(state => state.checkin.lastCheckIn);

  const handleCheckIn = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const timestamp = new Date().toISOString();
        dispatch(saveCheckIn({ latitude, longitude, timestamp }));
      },
      (error) => alert(error.message),
      { enableHighAccuracy: true }
    );
  };

  return (
    <View>
      <Button title="Check In" onPress={handleCheckIn} />
      {lastCheckIn && (
        <Text>
          Last check-in at {lastCheckIn.latitude.toFixed(3)}, {lastCheckIn.longitude.toFixed(3)} on {new Date(lastCheckIn.timestamp).toLocaleString()}
        </Text>
      )}
    </View>
  );
}
