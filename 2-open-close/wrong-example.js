class Cinema {
  constructor(price) {
    this.price = price;
  }
}

class StandardCinema extends Cinema {}

class DeluxeCinema extends Cinema {}

class PremiumCinema extends Cinema {}

class CinemaCalculations {
  calculateAdminFee(cinema) {
    if (cinema instanceof StandardCinema) {
      return (cinema.price * 10) / 100;
    }

    if (cinema instanceof DeluxeCinema) {
      return (cinema.price * 12) / 100;
    }

    if (cinema instanceof PremiumCinema) {
      return (cinema.price * 20) / 100;
    }

    return 0;
  }
}