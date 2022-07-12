function heavyMetalUmlauts(boringText) {
    let dir = {A:"Ä", E:"Ë", I:"Ï", O:"Ö", U:"Ü", Y:"Ÿ", a:"ä", e:"ë", i:"ï", o:"ö", u:"ü", y:"ÿ"};
    return boringText.replace(/[AEIOUYaeiouy]/g, char => dir[char]);
}