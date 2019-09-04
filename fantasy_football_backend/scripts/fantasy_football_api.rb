require 'rest-client'
require 'json'

ranking_url = 'https://www.fantasyfootballnerd.com/service/draft-rankings/json/ey7s5avidi5s/1/'
stats_url_qb = 'https://www.fantasyfootballnerd.com/service/draft-projections/json/ey7s5avidi5s/QB/'
stats_url_rb = 'https://www.fantasyfootballnerd.com/service/draft-projections/json/ey7s5avidi5s/RB/'
stats_url_wr = 'https://www.fantasyfootballnerd.com/service/draft-projections/json/ey7s5avidi5s/WR/'
stats_url_te = 'https://www.fantasyfootballnerd.com/service/draft-projections/json/ey7s5avidi5s/TE/'
stats_url_k = 'https://www.fantasyfootballnerd.com/service/draft-projections/json/ey7s5avidi5s/K/'
image_url = 
bid_value_with_ppr_url = 'https://www.fantasyfootballnerd.com/service/auction-enhanced/json/ey7s5avidi5s/1/'


# def create_core_player(url)
#     response = RestClient.get(url, headers={})
#     json = JSON.parse(response.body)
#     json["DraftRankings"].each do |player|
#         CorePlayer.create(player_id: player.playerId, display_name: player.displayName, fname: player.fname, lname: player.lname, team: player.team, position: player.position, bye_week: player.byeWeek, stand_dev: player.standDev, nerd_rank: player.nerdRank, position_rank: player.positionRank, overall_rank: player.overallRank)
#     end
# end

def create_player_stats(url)
    response = RestClient.get(url, headers={})
    json = JSON.parse(response.body)
    puts json["DraftProjections"][0]["fname"]
    # json["DraftProjections"].each do |player|
    #    PlayerStat.create(display_name: player.displayName, team: player.team, rush_att: player.rushAtt, rush_yards: player.rushYards, fumbles: player.fumbles, attempts: player.attempts, completions: player.completions, passing_yards: player.passingYards, passing_td: player.passingTD, passing_int: player.passingInt,rec: player.rec, rec_yards: player.recYards, rec_td: player.recTD, xp: player.xp, fg: player.fg, fantasy_points: player.fantasyPoints)
    # end
end 

# def create_bid_values(url)
#     response = RestClient.get(url, headers={})
#     json = JSON.parse(response.body)
#     json[0]["Players"].each do |player|
#         PlayerValue.create(display_name: player.displayName, fname: player.fname, lname: player.lname, team: player.team, min_price: player. minPrice, max_price: player.maxPrice, avg_price: player.avgPrice)
#     end
# end

    
create_player_stats(stats_url_qb)
# create_player_stats(stats_url_k)
# create_player_stats(stats_url_rb)
# create_player_stats(stats_url_wr)
# create_player_stats(stats_url_te)
# create_core_player(ranking_url)
# create_bid_values(bid_value_with_ppr_url)

# response = RestClient.get(bid_value_with_ppr_url, headers={})
# json = JSON.parse(response.body)
# puts json[0]["Players"].first
