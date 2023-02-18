import { useState } from "react";
import {sortDataByKind} from "./ShowContent";

describe('Show content of a card properly', () => {
  const data = [
    {
      'kind':'song',
      'artworkUrl100':'https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/f3/ee/b3/f3eeb3ff-ca32-273a-15aa-709bdfa64367/mzi.izwiyqez.jpg/100x100bb.jpg',
      'collectionName':'Three Way Tie for a Fifth',
      'artistName':'This Bike Is a Pipe Bomb',
      'collectionPrice':'9.99'
    },
    {
      'kind':'feature-movie',
      'artworkUrl100':'https://is4-ssl.mzstatic.com/image/thumb/Video125/…a03-27a5-408948f7f173/pr_source.lsr/100x100bb.jpg',
      'collectionName':'Jumanji Bienvenue Dans La Jungle + Jumanji Next Level',
      'artistName':'Jake Kasdan',
      'collectionPrice':'14.99'
    }
  ];
  const data2 = [
    {
      'kind':'song',
      'artworkUrl100':'https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/f3/ee/b3/f3eeb3ff-ca32-273a-15aa-709bdfa64367/mzi.izwiyqez.jpg/100x100bb.jpg',
      'collectionName':'Three Way Tie for a Fifth',
      'artistName':'This Bike Is a Pipe Bomb with more letter on its name',
      'collectionPrice':'9.99'
    },
    {
      'kind':'feature-movie',
      'artworkUrl100':'https://is4-ssl.mzstatic.com/image/thumb/Video125/…a03-27a5-408948f7f173/pr_source.lsr/100x100bb.jpg',
      'collectionName':'Jumanji Bienvenue Dans La Jungle + Jumanji Next Level',
      'artistName':'Jake Kasdan with more letters on its name to make it larger',
      'collectionPrice':'14.99'
    }
  ];
  const data3= [
    {
      'kind':'song',
      'artworkUrl100':'https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/f3/ee/b3/f3eeb3ff-ca32-273a-15aa-709bdfa64367/mzi.izwiyqez.jpg/100x100bb.jpg',
      'collectionName':undefined,
      'artistName':undefined,
      'collectionPrice':'9.99'
    },
    {
      'kind':'feature-movie',
      'artworkUrl100':'https://is4-ssl.mzstatic.com/image/thumb/Video125/…a03-27a5-408948f7f173/pr_source.lsr/100x100bb.jpg',
      'collectionName':undefined,
      'artistName':undefined,
      'collectionPrice':'14.99'
    }
  ];

  it('Should sort the data by Movies and Songs', () => {
    const [moviesArray, songsArray] = sortDataByKind(data);
    expect(moviesArray.length).toEqual(1);
    expect(songsArray.length).toEqual(1);
  });

  it('Should shorten a large album name', () => {
    const [moviesArray, songsArray] = sortDataByKind(data);
    expect(moviesArray[0]).toEqual({
      'ImageUrl': 'https://is4-ssl.mzstatic.com/image/thumb/Video125/…a03-27a5-408948f7f173/pr_source.lsr/100x100bb.jpg',
      'AlbumName': 'Jumanji B...',
      'ArtistName': 'Jake Kasdan',
      'Price': '14.99'
    });
    expect(songsArray[0]).toEqual({
      'ImageUrl':'https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/f3/ee/b3/f3eeb3ff-ca32-273a-15aa-709bdfa64367/mzi.izwiyqez.jpg/100x100bb.jpg',
      'AlbumName':'Three Way...',
      'ArtistName':'This Bike Is a Pipe Bomb',
      'Price':'9.99'
    });
  });

  it('Should shorten a large artist name', () => {
    const [moviesArray, songsArray] = sortDataByKind(data2);
    expect(songsArray[0]).toEqual({
      'ImageUrl':'https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/f3/ee/b3/f3eeb3ff-ca32-273a-15aa-709bdfa64367/mzi.izwiyqez.jpg/100x100bb.jpg',
      'AlbumName':'Three Way...',
      'ArtistName':'This Bike Is a Pipe Bomb with ...',
      'Price':'9.99'
    });
    expect(moviesArray[0]).toEqual({
      'ImageUrl':'https://is4-ssl.mzstatic.com/image/thumb/Video125/…a03-27a5-408948f7f173/pr_source.lsr/100x100bb.jpg',
      'AlbumName':'Jumanji B...',
      'ArtistName':'Jake Kasdan with more letters ...',
      'Price':'14.99'
    });
  })

  it('Should return ----- when a field is empty', () => {
    const [moviesArray, songsArray] = sortDataByKind(data3);
    expect(moviesArray[0]).toEqual({
      'ImageUrl':'https://is4-ssl.mzstatic.com/image/thumb/Video125/…a03-27a5-408948f7f173/pr_source.lsr/100x100bb.jpg',
      'AlbumName':'-----',
      'ArtistName':'-----',
      'Price':'14.99'
    });
    expect(songsArray[0]).toEqual({
      'ImageUrl':'https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/f3/ee/b3/f3eeb3ff-ca32-273a-15aa-709bdfa64367/mzi.izwiyqez.jpg/100x100bb.jpg',
      'AlbumName':'-----',
      'ArtistName':'-----',
      'Price':'9.99'
    });
  })
});