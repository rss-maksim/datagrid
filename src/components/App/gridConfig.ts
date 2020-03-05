import { DataTypes } from '../../const/dataTypes'

export const gridConfig = {
    columns: [
        {
            name: 'ID',
            source: 'id',
            type: DataTypes.number
        },
        {
            name: 'Rank',
            source: 'rank',
            type: DataTypes.number
        },
        {
            name: 'Name',
            source: 'name',
            type: DataTypes.string
        },
        {
            name: 'Github',
            source: 'githubId',
            type: DataTypes.string
        },
        {
            name: 'Score',
            source: 'totalScore',
            type: DataTypes.number
        },
        {
            name: 'Change Date',
            source: 'totalScoreChangeDate',
            type: DataTypes.datetime
        },
        {
            name: 'Location',
            source: 'locationName',
            type: DataTypes.string
        },
        {
            name: 'Active',
            source: 'isActive',
            type: DataTypes.boolean
        }
    ]
}
