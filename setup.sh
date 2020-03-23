# Create the gh-pages worktree
rm -rf public
git worktree prune
git worktree add -B gh-pages public/ origin/gh-pages

# Add the ananke theme submodule
rm -rf .git/modules/gohugo-theme-ananke
cd themes/
	rm -rf gohugo-theme-ananke
	git rm --cached gohugo-theme-ananke
	git submodule add --force git://github.com/budparr/gohugo-theme-ananke.git 
cd ..