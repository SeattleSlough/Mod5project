class CorePlayer < ApplicationRecord
has_many :core_players_fantasy_leagues
has_many :fantasy_leagues, through: :core_players_fantasy_leagues

end
