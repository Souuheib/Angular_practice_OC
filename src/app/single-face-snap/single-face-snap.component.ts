import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap! : FaceSnap; // injection de facesnap depuis le parent app compoenent

  
  buttonText!:string;

  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute){}


  // Pour initialiser ces propriétés en suivant les best practices Angular, 
  //vous allez utiliser la méthode  ngOnInit()
  ngOnInit(){ 
    
    this.buttonText= 'Oh snap!';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);

  }

  onSnap(){
    if (this.buttonText === 'Oh snap'){
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'snap');
      this.buttonText = 'Oh no unsnap'
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'unsnap');
      this.buttonText = 'Oh snap';
      
    }
    
    // if (this.buttonText === 'Oh snap')
    //    this.faceSnap.snaps ++;
  }

}
