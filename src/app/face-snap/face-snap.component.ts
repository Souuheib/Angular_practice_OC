import { Component, OnInit, Input  } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import{ Router} from '@angular/router'

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent  {
  @Input() faceSnap! : FaceSnap; // injection de facesnap depuis le parent app compoenent

  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageurl!:string;
  buttonText!:string;

  constructor(private faceSnapsService: FaceSnapsService,
              private router: Router){}


  // Pour initialiser ces propriétés en suivant les best practices Angular, 
  //vous allez utiliser la méthode  ngOnInit()
  ngOnInit(){ 
    this.title = 'Archibald';
    this.description = 'Mon meilleur ami depuis tout petit !';
    this.createdDate = new Date();
    this.snaps = 6;
    this.imageurl="https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e_400x400.jpg";
    this.buttonText= 'Oh snap'!; 
  }

  onSnap(){
    if (this.buttonText === 'Oh snap'){
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'snap');
      this.buttonText = 'Oh no unsnap'
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'unsnap');
      this.buttonText = 'Oh snap';
      
    }

    
}

onViewFaceSnap(){
  this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);

// if (this.buttonText === 'Oh snap')
//    this.faceSnap.snaps ++;
}


}