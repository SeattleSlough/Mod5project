class FantasyLeaguesUser < ApplicationRecord
    belongs_to :fantasy_league
    belongs_to :user
end