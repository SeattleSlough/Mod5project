class OwnersController < ApplicationController
def index
    @owners = Owner.all 
    render json: @owners
end


def create
    @owner = Owner.create(user_id: params[:user_id], player_id: params[:player_id])
    players = PlayerValue.all
    #write an object that takes the user_id as a key and then totals the position numbers
    #write a short circuit function that says so long as the values don't exceed certain limits then save the post 

    

    render json: @owner
end

def destroy
    @owner = Owner.findby(:id)
    Owner.destroy(@owner)
end
end
