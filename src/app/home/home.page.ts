import { Component } from '@angular/core';
import { Diagnostic } from 'ionic-native';
import { CameraPreview, CameraPreviewRect } from 'ionic-native'; //importar para fotos y video


export class HomePage {

  constructor(public navCtrl: NavController, 
    public toastCtrl: ToastController) {
this.checkPermissions();
}
//pantalla de permiso para uso de la cámara

checkPermissions() {
  Diagnostic.isCameraAuthorized().then((authorized) => {
    if(authorized)
        this.initializePreview();
    else {
        Diagnostic.requestCameraAuthorization().then((status) => {
            if(status == Diagnostic.permissionStatus.GRANTED)
                this.initializePreview();
            else {
                // Permissions not granted
                // Therefore, create and present toast
                this.toastCtrl.create(
                    {
                        message: "Cannot access camera", 
                        position: "bottom",
                        duration: 5000
                    }
                ).present();
            }
        });
    }
});

CameraPreview(){
initializePreview() {
  // Make the width and height of the preview equal 
  // to the width and height of the app's window
  let previewRect: CameraPreviewRect = {
    x: 0,
    y: 0,
    width: window.innerWidth,
    height: window.innerHeight
  };

  // More code goes here
};
}

// Start preview
CameraPreview.startCamera(
  previewRect, 
  'rear', 
  false, 
  false, 
  true,
  1
);


