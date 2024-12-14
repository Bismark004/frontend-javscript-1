interface MajorCredits {
    credits: number;
    _majorBrand: 'major'; // brand property for unique identification
  }
  
  interface MinorCredits {
    credits: number;
    _minorBrand: 'minor'; // brand property for unique identification
  }
  
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      _majorBrand: 'major',
    };
  }
  
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      _minorBrand: 'minor',
    };
  }