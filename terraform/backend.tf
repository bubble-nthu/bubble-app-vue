terraform {
  cloud {
    organization = "bubble-sdgs-nthu"

    workspaces {
      name = "bubble-front-end-search-board"
    }
  }
}