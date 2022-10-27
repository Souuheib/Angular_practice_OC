import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
          id:1,
        title : 'Archibald',
        description: 'Mon meilleur ami depuis tout petit !',
        createdDate: new Date(),
        snaps: 0,
        imageurl: "https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e_400x400.jpg",
        location: 'paris'
      },
  
       {
        id:2,
        title : 'Three Rock Mountain',
        description: 'UN endroi pour les rendonnées !',
        createdDate: new Date(),
        snaps: 0,
        imageurl: "https://image.shutterstock.com/image-photo/senior-woman-sports-wear-black-600w-1417966580.jpg",
        location: 'lam ontagne'
      },
  
       {
        id:3,
        title : 'un bon repas',
        description: 'c bon !',
        createdDate: new Date(),
        snaps: 7,
        imageurl: "https://image.shutterstock.com/image-photo/hilarious-lady-protecting-her-cat-600w-1577635609.jpg",
        
      }
  
    ]
    ;

    getAllFaceSnaps(): FaceSnap[]{
      return this.faceSnaps;
    }

    getFaceSnapById(id :number): FaceSnap{
      const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === id);
      if (!faceSnap){
        throw new Error('not found');
      }
      else{
        return faceSnap;
      }
    }

    snapFaceSnapById(id :number, snapType: 'snap' | 'unsnap'): void{
      const faceSnap = this.getFaceSnapById(id);
      snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }

    
}