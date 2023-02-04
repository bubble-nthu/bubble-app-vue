terraform {
  cloud {
    organization = "bubble-sdgs-nthu"

    workspaces {
      name = "bubble_front_end_search_board"
    }
  }
}