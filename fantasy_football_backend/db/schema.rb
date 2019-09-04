# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_09_04_190659) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "core_players", force: :cascade do |t|
    t.string "display_name"
    t.string "fname"
    t.string "lname"
    t.integer "player_id"
    t.string "image"
    t.string "position"
    t.string "team"
    t.integer "bye_week"
    t.integer "stand_dev"
    t.integer "nerd_rank"
    t.integer "position_rank"
    t.integer "overall_rank"
  end

  create_table "core_players_fantasy_leagues", id: false, force: :cascade do |t|
    t.bigint "fantasy_league_id", null: false
    t.bigint "core_player_id", null: false
    t.string "owner"
  end

  create_table "fantasy_leagues", force: :cascade do |t|
    t.string "league_name"
    t.integer "players", default: 0
  end

  create_table "fantasy_leagues_users", id: false, force: :cascade do |t|
    t.bigint "fantasy_league_id", null: false
    t.bigint "user_id", null: false
  end

  create_table "owners", force: :cascade do |t|
    t.integer "player_id"
    t.integer "user_id"
  end

  create_table "player_stats", force: :cascade do |t|
    t.string "display_name"
    t.integer "player_id"
    t.string "position"
    t.string "image"
    t.string "team"
    t.integer "rush_att"
    t.integer "rush_yards"
    t.integer "rush_td"
    t.integer "fumbles"
    t.integer "rec"
    t.integer "rec_yards"
    t.integer "rec_td"
    t.integer "fantasy_points"
    t.integer "completions"
    t.integer "attempts"
    t.integer "passing_yards"
    t.integer "passing_td"
    t.integer "passing_int"
    t.integer "xp"
    t.integer "fg"
  end

  create_table "player_values", force: :cascade do |t|
    t.string "display_name"
    t.integer "player_id"
    t.string "image"
    t.string "team"
    t.integer "min_price"
    t.integer "max_price"
    t.integer "avg_price"
    t.string "position"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "avatar"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
