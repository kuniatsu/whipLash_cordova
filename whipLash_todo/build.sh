rm -rf platforms/android
rm -rf platforms/ios
# cordova platform add android
cordova platform add ios
cordova plugin add https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin.git
cordova prepare
cordova build 
# cordova emulate ios
# echo emulater up -> $ cordovaemulate ios
