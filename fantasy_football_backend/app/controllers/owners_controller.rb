class OwnersController < ApplicationController
def index
    @owners = Owner.all 
    render json: @owners
end


def create
    @owner = Owner.create(user_id: params[:user_id], player_id: params[:player_id])
    render json: @owner
end

def destroy
    @owner = Owner.findby(:id)
    Owner.destroy(@owner)
end
end
