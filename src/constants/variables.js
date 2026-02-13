import { Platform } from "react-native";
import DeviceInfo from "react-native-device-info";

// Device Information
global.DEVICE_INFO = {
  deviceType: Platform.OS,
  deviceModel: DeviceInfo.getModel(),
  deviceId: DeviceInfo.getUniqueId(),
  appVersion: DeviceInfo.getVersion(),
};

