class FantasyLeague < ApplicationRecord
    has_many :fantasy_leagues_users
    has_many :users, through: :fantasy_leagues_users
    has_many :core_players_fantasy_leagues
    has_many :core_players, through: :core_players_fantasy_leagues
end
