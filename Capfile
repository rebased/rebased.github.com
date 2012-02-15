load 'deploy' if respond_to?(:namespace) # cap2 differentiator

set :application, "rebased.pl"
set :keep_releases, 1
set :repository,  "git://github.com/rebased/rebased.github.com.git"
set :repository_files, %w(Capfile CNAME REVISION .git)
set :scm, :git
set :use_sudo, false
set :user, "rebased"

role :web, "rebased.pl"
role :app, "rebased.pl"
role :db,  "rebased.pl", :primary => true

# Override default tasks which are not relevant to a non-rails app.
namespace :deploy do
  task :finalize_update do
    repository_files.each do |file|
      run "rm -rf #{release_path}/#{file}"
    end
  end
  task :migrate do end
  task :restart do end
  task :start do end
  task :stop do end
end

after "deploy:update", "deploy:cleanup"
