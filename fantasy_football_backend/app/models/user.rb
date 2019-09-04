class User < ApplicationRecord
    has_many :core_players_users
    has_many :core_players, through: :core_players_users
    has_many :fantasy_leagues_users
    has_many :fantasy_leagues, through: :fantasy_leagues_users
    has_secure_password
    validates :username, uniqueness: {case_sensitive: false}
end
