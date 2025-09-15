                  </div>
                </div>

                {/* Lista de playlists personalizadas */}
                {Object.keys(customPlaylists).length > 0 && (
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Playlists Personalizadas</h3>
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {Object.keys(customPlaylists).map(playlistName => (
                        <div key={playlistName} className="flex items-center justify-between p-2 bg-muted rounded">
                          {editingPlaylist === playlistName ? (
                            <div className="flex gap-2 flex-1">
                              <Input
                                defaultValue={playlistName}
                                onKeyPress={(e) => {
                                  if (e.key === 'Enter') {
                                    renameCustomPlaylist(playlistName, e.target.value)
                                  }
                                }}
                                onBlur={(e) => renameCustomPlaylist(playlistName, e.target.value)}
                                className="flex-1 text-sm"
                                autoFocus
                              />
                            </div>
                          ) : (
                            <>
                              <div className="flex items-center gap-2 flex-1">
                                <Heart className="w-4 h-4 text-primary" />
                                <span className="text-sm">{playlistName}</span>
                                <span className="text-xs text-muted-foreground">
                                  ({customPlaylists[playlistName].length} músicas)
                                </span>
                              </div>
                              <div className="flex gap-1">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => setEditingPlaylist(playlistName)}
                                  className="text-xs px-2"
                                >
                                  Renomear
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => deleteCustomPlaylist(playlistName)}
                                  className="text-xs px-2 text-destructive hover:text-destructive"
                                >
                                  <Trash2 className="w-3 h-3" />
                                </Button>
                              </div>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Adicionar músicas à playlist */}
                {Object.keys(customPlaylists).length > 0 && playlist.length > 0 && (
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Adicionar Músicas</h3>
                    <div className="space-y-2 max-h-32 overflow-y-auto">
                      {playlist.slice(0, 5).map(track => (
                        <div key={track.id} className="flex items-center justify-between p-2 bg-muted rounded text-xs">
                          <span className="truncate flex-1">{track.title}</span>
                          <select
                            onChange={(e) => {
                              if (e.target.value) {
                                addTrackToCustomPlaylist(track.id, e.target.value)
                                e.target.value = ''
                              }
                            }}
                            className="text-xs bg-background border rounded px-2 py-1"
                          >
                            <option value="">Adicionar à...</option>
                            {Object.keys(customPlaylists).map(name => (
                              <option key={name} value={name}>{name}</option>
                            ))}
                          </select>
                        </div>
                      ))}
                      {playlist.length > 5 && (
                        <p className="text-xs text-muted-foreground text-center">
                          E mais {playlist.length - 5} músicas...
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

export default App

