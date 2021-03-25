Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resource :webhooks
      resources :cards
    end
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '*path', to: 'pages#index'
  root 'pages#index', as: :pages_index
end
