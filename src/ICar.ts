interface ICar {
  myReview: string;
    make: string;
    model: string;
    year: string;
    imageURL: string;
    quality: ICarQuality[];
}
interface ICarQuality {
    name: string;
    rating: string;
}